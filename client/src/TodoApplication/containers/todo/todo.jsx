import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, doneTask, editTask, changeFilter } from '../../actions/creator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputChange = ({ target: { value }}) => {
    this.setState({
      taskText: value,
    });
  }

  addTast = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 0 && key === 'Enter') {
      const { addTast } = this.props;
      
      addTast(Math.floor(Math.random() * 1000), taskText, false);

      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.done);
        break;
      case 'active':
        return tasks.filter(task => !task.done);
        break;
      default:
        return tasks;
    }
  }

  editFunc = ({ target: { value }}) => {
    this.setState({
      taskText: value,
    });
    console.log(this.state)
  }

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, doneTask, editTask, filters, changeFilter } = this.props
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters)

    return (
      <div className="todo-wrapper">
        <h1>Todo App</h1>
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText}/>
        {isTasksExist && <ToDoList tasksList={filteredTasks} editTask={this.editFunc} doneTask={doneTask} removeTask={removeTask}/>}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={tasks.length} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters,
}), { addTast, removeTask, doneTask, editTask, changeFilter })(ToDo);
