import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addTast, removeTask, doneTask, changeFilter, editTask, addList } from '../../actions/creator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

  componentDidMount() {
    const userId = localStorage.getItem('user');
    axios.post(`http://localhost:3001/todo/todoList/`,
      { userId }
    ).then(result => {

        const data = result.data;
        const { addList } = this.props;

        data.forEach(Item => {
          addList(Item._id, Item.text, Item.done)
        });
      })
    .catch(err => err);
  }

  handleInputChange = (event) => {
    this.setState({
      taskText: event.target.value,
    });
  }

  addTast = ({ key }) => {

    const { taskText } = this.state;
    const { tasks } = this.props;

    const duplicate = tasks.find(task => task.text === taskText.trim());

    if (!duplicate && taskText.trim() !== '' && key === 'Enter') {

      const { addTast } = this.props;
      const userId = localStorage.getItem('user');

      this.setState({
        taskText: ''
      })

      axios.post(`http://localhost:3001/todo/todoList/add`,
        { taskText, userId }
      ).then(result => {
        const data = result.data;

        data.forEach(Item => {
          if (Item.text === taskText) {
            addTast(Item._id, taskText.trim(), false)
          }
        });
      }).catch(err => console.log('err', err))
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
          value={taskText} />

        {isTasksExist &&
          <ToDoList
            tasksList={filteredTasks}
            editTask={this.editTask}
            doneTask={doneTask}
            removeTask={removeTask} />}

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
}), { addTast, removeTask, doneTask, changeFilter, editTask, addList })(ToDo);
