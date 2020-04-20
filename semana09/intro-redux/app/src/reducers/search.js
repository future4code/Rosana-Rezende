const initialState = []

const searchReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SELECT_TASK_BY_SEARCH': {
            return action.payload.search
        }

        default:
            return state;
    }
};

export default searchReducer;