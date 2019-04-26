import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, doneTask, editTask}) => (
  <ul className="todo-list">
    {
      tasksList.map(({ id, text, done }) => (
        <ToDoItem 
          editTask={editTask}
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
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  doneTask: () => {},
}

export default ToDoList;
