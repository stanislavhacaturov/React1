import React, { Fragment } from 'react';
import ToDo from './containers/todo/todo';
import './todoApp.css';

const TodoApp = () => (
  <Fragment >
    <div className='wrapper1' >
      <ToDo />
    </div>
  </Fragment>
);

export default TodoApp;
