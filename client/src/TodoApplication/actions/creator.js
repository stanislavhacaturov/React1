import axios from 'axios';

export const addTast = (id, text, done) => ({
    type: 'ADD_TASK',
    id,
    text,
    done
});

export const removeTask = id => ({
  type: 'REMOVE_TASK',
  id
});

export const doneTask = id => {
  axios.post(`http://localhost:3001/add/todoList/:id/doneTodo`,
          { id }
      ).then(res => {
          
      }).catch(err => {
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
  return({
    type: 'EDIT_TASK',
    id,
    text,
    done
  })
};