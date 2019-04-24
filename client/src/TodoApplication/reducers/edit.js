const edit = (state = [], { id, text, done, type }) => {
    switch (type) {

        case 'EDIT_TASK' :
            return [...state].filter(task => task.id === id);
            
        default:
            return state;
    }
}

export default edit;