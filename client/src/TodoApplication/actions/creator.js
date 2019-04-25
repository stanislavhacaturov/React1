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

export const doneTask = id => ({
  type: 'DONE_TASK',
  id
});

export const editTask = (id, temp) => ({
  type: 'EDIT_TASK',
  id,
  temp
});

export const changeFilter = activeFilter => ({
  type: 'CHANGE_FILTER',
  activeFilter,
})