const edit = (state = [], { id, text, done, type }) => {
    switch (type) {

        case 'EDIT_TASK' :
            return [
                ...state, {
                    id,
                    text,
                    done,
                }
            ];
            
        default:
            return state;
    }
}

export default edit;