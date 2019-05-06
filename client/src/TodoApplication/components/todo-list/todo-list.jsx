import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';
import axios from 'axios';

class ToDoList extends Component {
  state = {
    result: {},
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/todo/todoList/`)
      .then(res => res.json())   
      .then(result => this.setList(result))
      .catch(err => err);
  }

  setList = result => {
    this.setState({ result });
  }

  render() {
    const { removeTask, doneTask, editTask } = this.props
    const { hits = [] } = result;

    return (
      <ul className="todo-list">
        {
          hits.map(({ id, text, done }) => (
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
    )
  }
}

// const ToDoList = ({ tasksList, removeTask, doneTask, editTask }) => (
//   <ul className="todo-list">
//     {
//       tasksList.map(({ id, text, done }) => (
//         <ToDoItem 
//           editTask={editTask}
//           doneTask={doneTask} 
//           removeTask={removeTask} 
//           id={id} 
//           key={id} 
//           text={text} 
//           done={done} />
//       ))
//     }
//   </ul>
// );

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
