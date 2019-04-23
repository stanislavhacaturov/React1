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

export const assignment = (id, text) => ({
  type: 'EDIT_TASK_1',
  id,
  text
});

export const editTask = (id, temp) => ({
  type: 'EDIT_TASK_2',
  id,
  temp
});