// const initialState = [
//     {
//         id: new Date().getTime(),
//         completed: false,
//         text: 'Nova tarefinha linda! Edite, complete e delete à vontade!'
//     }
// ]

let initialState = []

const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        // filter
        // case 'SELECT_TASK_BY_FILTER': {
        //     const oldValue = state.value;
        //     const newState = { value: oldValue + 1};
        //     return newState
        // }

        default:
            return state;
    }
};

export default filterReducer;