import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

class ToDoItem extends Component {

  state = {
    changeInput: false,
  }

  // handleInputChange = ({ target: { value }}) => {
  //   this.setState({
  //     taskText: value,
  //   });
  // }

  // addTast = ({ key }) => {
  //   const { taskText } = this.state;
  //   const { tasks } = this.props;

  //   const duplicate = tasks.find(task => task.text === taskText.trim());

  //   if (!duplicate && taskText.trim() !== '' && key === 'Enter') {
      
  //     const { addTast } = this.props;

  //     addTast(Math.floor(Math.random() * 1000), taskText.trim(), false);

  //     this.setState({
  //       taskText: ''
  //     })
  //   }
  // }

  changeBtn = () => {
    this.setState({
      changeInput: true
    })
  }

  render() {
    const { text, done, removeTask, id, doneTask, editFunc } = this.props
    const { changeInput } = this.state

    return (
      changeInput ?
      <input /> :
      <Fragment>
        <li      
          className="todo-item">
            <i 
              onClick={() => doneTask(id)} 
              className={done ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
            <span 
              onDoubleClick={this.changeBtn} 
              className={done ? 'completed text' : 'text'}>{text}</span>
            <i 
              onClick={() => removeTask(id)} 
              className="fas fa-times" />
        </li>
      </Fragment>
    );
  }
}

// const ToDoItem = ({ text, done, removeTask, id, doneTask, editFunc }) => (
//   <li 
//     onClick={() => doneTask(id)} 
//     className="todo-item">
//       <i 
//         className={done ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
//       <span 
//         onDoubleClick={() => editFunc(text)} 
//         className={done ? 'completed text' : 'text'}>{text}</span>
//       <i 
//         onClick={() => removeTask(id)} 
//         className="fas fa-times" />
//   </li>
// );

ToDoItem.propTypes = {
  text: PropTypes.string,
  doneTask: PropTypes.func,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  editFunc: PropTypes.func
}

ToDoItem.defaultProps = {
  text: '',
  removeTask: () => {},
  id: 0,
  done: false,
  editFunc: () => {}
}

export default ToDoItem;
