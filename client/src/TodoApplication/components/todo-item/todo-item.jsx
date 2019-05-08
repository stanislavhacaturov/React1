import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { editTask } from '../../actions/creator';
import './todo-item.css';

class ToDoItem extends Component {

  state = {
    changeInput: false,
    taskText: this.props.text.trim()
  }

  handleInputChange = ({ target: { value }}) => {
    this.setState({
      taskText: value,
    });
  }

  editTask = ({ key }) => {
    const { taskText } = this.state;
    const { id, done } = this.props;

    if (taskText.trim() !== '' && key === 'Enter') {
      const { editTask } = this.props;

      editTask(id, taskText.trim(), done);

      this.setState({
        changeInput: !this.state.changeInput,
      });
    }
  }

  changeBtn = () => {
    this.setState({
      changeInput: !this.state.changeInput
    })
  }

  btn = (e) => {
    e.preventDefault();
  }

  render() {
    const { text, done, removeTask, id, doneTask } = this.props
    const { changeInput, taskText } = this.state

    return (
      changeInput ?
      <input className='editInput'value={taskText} onChange={this.handleInputChange} onKeyPress={this.editTask}/> :
      <Fragment>
        <li 
          onDoubleClick={this.changeBtn}      
          className="todo-item">
            <i    
            onDoubleClick={this.btn}        
              onClick={() => doneTask(id)} 
              className={done ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
            <span 
              
              className={done ? 'completed text' : 'text'}>{text}</span>
            <i 
              onClick={() => removeTask(id)} 
              className="fas fa-times" />
        </li>
      </Fragment>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks
}), { editTask })(ToDoItem);