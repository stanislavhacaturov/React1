import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoItem from '../todo-item/todo-item';
import './todo-list.css';

class ToDoList extends Component {
  
  render() {
    const { tasksList, removeTask, doneTask, editTask } = this.props;

    return (
      <ul className="todo-list">
      {
        tasksList.map(({ id, text, done }) => (
          <ToDoItem 
            editTask={editTask}
            doneTask={doneTask} 
            removeTask={removeTask} 
            id={id} 
            key={text} 
            text={text} 
            done={done} />
        ))
      }
      </ul>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters,
}), {  })(ToDoList);
