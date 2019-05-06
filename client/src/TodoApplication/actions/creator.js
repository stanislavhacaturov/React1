import axios from 'axios';

export const addTast = (id, text, done) => {
  axios.post(`http://localhost:3001/todo/todoList/add`,
  { id, text, done }
    ).then(res => {
        
    }).catch(err => {
      console.log('err', err);
    })
  return({
    type: 'ADD_TASK',
    id,
    text,
    done    
  })
};

export const removeTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/:id/removeTodo`,
          { id }
      ).then(res => {
          
      }).catch(err => {
          console.log('err', err);
      })
  return({
    type: 'REMOVE_TASK',
    id
  })
};

export const doneTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/:id/doneTodo`,
          { id }
      ).catch(err => {
          console.log('err', err);
      })
  return({
    type: 'DONE_TASK',
    id
  })
};

export const changeFilter = activeFilter => ({
  type: 'CHANGE_FILTER',
  activeFilter,
})

export const editTask = (id, text, done) => {
  axios.post(`http://localhost:3001/todo/todoList/:id/editTodo`,
          { id, text }
      ).catch(err => {
          console.log('err', err);
      })  
  return({
    type: 'EDIT_TASK',
    id,
    text,
    done
  })
};