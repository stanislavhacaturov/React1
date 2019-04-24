const tasks = (state = [], { id, text, done, type }) => {
    switch (type) {
        case 'ADD_TASK' :
            return [
                ...state, {
                    id,
                    text,
                    done,
                }
            ];

        case 'REMOVE_TASK' :
            return [...state].filter(task => task.id !== id);

        case 'DONE_TASK':
            return [...state].map(task => {
                if(task.id === id) {
                    task.done = !task.done;
                }
                return task;
            });

        case 'EDIT_TASK_1' :
        return [...state].map(task => {
            if(task.id === id) {
                
            }
            return task;
        });

        case 'EDIT_TASK_2' :
            return [...state].filter(task => task.id === id);
            
        default:
            return state;
    }
}

export default tasks;