import axios from 'axios';

export const addList = (id, text, done) => ({
  type: 'ADD_LIST',
  id,
  text,
  done
});

export const addTast = (id, text, done) => ({
  type: 'ADD_TASK',
  id,
  text,
  done
});

export const removeTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/removeTodo/` + id,
    { id }
  ).catch(err => console.log('err', err))
  return ({
    type: 'REMOVE_TASK',
    id
  })
};

export const doneTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/doneTodo/` + id,
    { id }
  ).catch(err => console.log('err', err))
  return ({
    type: 'DONE_TASK',
    id
  })
};

export const changeFilter = activeFilter => ({
  type: 'CHANGE_FILTER',
  activeFilter,
});

export const editTask = (id, text, done) => ({
  type: 'EDIT_TASK',
  id,
  text,
  done
});