const initialState = 'todas'

const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SELECT_TASK_BY_FILTER': {
            return action.payload.filter
        }

        default:
            return state;
    }
};

export default filterReducer;