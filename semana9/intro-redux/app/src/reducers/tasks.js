// Pedido chegou ao CAIXA... ele vai atualizar o que pedi na store

const initialState = [
    {
        id: new Date().getTime(),
        completed: false,
        text: 'New Task'
    }
]

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TASK': {
            return [
                ...state,
                {
                    id: new Date().getTime(),
                    completed: false,
                    text: action.payload.text
                }
            ]
        }

        case 'REMOVE_TASK': {
            return state.filter(task =>
                task.id !== action.payload.id
            )
        }

        case 'EDIT_TASK': {
            return state.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            )
        }

        case 'MARK_TASK_AS_COMPLETE': {
            let copiaState = [...state]
            let thisTask = copiaState.find(task => task.id === action.payload.id)
            thisTask.completed = !thisTask.completed
            return copiaState
        }

        case 'MARK_ALL_TASKS_AS_COMPLETE': {
            let copiaState = [...state]
            let thisTask = copiaState.forEach(task => task.completed = true)
            return thisTask
        }



        // case 'REMOVE_COMPLETE_TASK': {
        //     return state.filter(task => task.completed === false)
        // }

        // case 'SELECT_TASK_BY_FILTER': {
        //     // const oldValue = state.value;
        //     // const newState = { value: oldValue + 1};
        //     // return newState
        // }

        default:
            return state;
    }
};

export default tasksReducer;

