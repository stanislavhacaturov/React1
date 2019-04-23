import React, { Component } from 'react';
import { connect } from 'react-redux';

 import { addTast, removeTask, doneTask, editTask } from '../../actions/creator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
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

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask, doneTask, editTask } = this.props
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <h1>Todo App</h1>
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText}/>
        {isTasksExist && <ToDoList tasksList={tasks} editTask={editTask} doneTask={doneTask} removeTask={removeTask}/>}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTast, removeTask, doneTask, editTask })(ToDo);
