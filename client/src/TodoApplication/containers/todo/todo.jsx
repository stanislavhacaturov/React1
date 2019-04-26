import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, doneTask, changeFilter, editTask } from '../../actions/creator';

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
    const { tasks } = this.props;

    const duplicate = tasks.find(task => task.text === taskText.trim());

    if (!duplicate && taskText.trim() !== '' && key === 'Enter') {
      
      const { addTast } = this.props;

      addTast(Math.floor(Math.random() * 1000), taskText.trim(), false);

      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.done);
      case 'active':
        return tasks.filter(task => !task.done);
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.done).length;
  getCompletedTasksCounter = tasks => tasks.filter(task => task.done).length;


  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, doneTask, filters, changeFilter } = this.props
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters)
    const getActiveTasksCounter = this.getActiveTasksCounter(tasks);
    const getCompletedTasksCounter = this.getCompletedTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <h1>Todo App</h1>
        <ToDoInput 
          onKeyPress={this.addTast} 
          onChange={this.handleInputChange} 
          value={taskText}/>

        {isTasksExist && 
          <ToDoList 
            tasksList={filteredTasks} 
            editTask={this.editTask} 
            doneTask={doneTask} 
            removeTask={removeTask}/>}

        {isTasksExist && 
          <Footer 
            changeFilter={changeFilter} 
            active={getActiveTasksCounter} 
            completed={getCompletedTasksCounter} 
            activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters,
}), { addTast, removeTask, doneTask, changeFilter, editTask })(ToDo);
