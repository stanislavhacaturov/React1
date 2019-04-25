import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, doneTask, editFunc }) => (
  <ul className="todo-list">
    {
      tasksList.map(({ id, text, done }) => (
        <ToDoItem 
          editFunc={editFunc} 
          doneTask={doneTask} 
          removeTask={removeTask} 
          id={id} 
          key={id} 
          text={text} 
          done={done} />
      ))
    }
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  doneTask: PropTypes.func,
  editFunc: PropTypes.func
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  doneTask: () => {},
  editFunc: () => {},
}

export default ToDoList;
