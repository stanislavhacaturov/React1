import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, done, removeTask, id, doneTask, editTask }) => (
  <li className="todo-item">
    <i onClick={() => doneTask(id)} className={done ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span onDoubleClick={() => editTask(id)} className={done ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  doneTask: PropTypes.func,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  editTask: PropTypes.func
}

ToDoItem.defaultProps = {
  text: '',
  removeTask: () => {},
  id: 0,
  done: false,
  editTask: () => {}
}

export default ToDoItem;
