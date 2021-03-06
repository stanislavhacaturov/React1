const tasks = (state = [], { id, text, done, type }) => {
    switch (type) {
        case 'ADD_LIST':
            return [
                ...state, {
                    id,
                    text,
                    done,
                }
            ]
        case 'ADD_TASK':
            return [
                ...state, {
                    id,
                    text,
                    done,
                }
            ];
        case 'EDIT_TASK':
            return state.map(task => task.id === id ?
                {
                    ...task,
                    text: text,
                } : task
            )

        case 'REMOVE_TASK':
            return [...state].filter(task => task.id !== id);

        case 'DONE_TASK':
            return [...state].map(task => {
                if (task.id === id) {
                    task.done = !task.done;
                }
                return task;
            });

        default:
            return state;
    }
}

export default tasks;