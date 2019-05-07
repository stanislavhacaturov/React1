import axios from 'axios';

export const addList = (id, text, done) => {
  return({
    type: 'ADD_LIST',
    id,
    text,
    done    
  })
};

export const addTast = (id, text, done) => {
  // axios.post(`http://localhost:3001/todo/todoList/add`,
  //   { text, done }
  //   ).then(res => {
      
  //   }).catch(err => {
  //     console.log('err', err);
  //   })
  return({
    type: 'ADD_TASK',
    id,
    text,
    done    
  })
};

export const removeTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/removeTodo/` + id,
    { id }
    ).then(res => {
      console.log('idishka')
    }).catch(err => {
        console.log('err', err);
    })
  return({
    type: 'REMOVE_TASK',
    id
  })
};

export const doneTask = id => {
  axios.post(`http://localhost:3001/todo/todoList/doneTodo/` + id,
    { id }
    ).then(res => {
        console.log('iddddddd', id)
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
  axios.post(`http://localhost:3001/todo/todoList/editTodo/` + id,
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