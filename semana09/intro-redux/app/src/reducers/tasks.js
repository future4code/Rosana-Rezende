// Pedido chegou ao CAIXA... ele vai atualizar o que pedi na store

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     done: false,
    //     text: 'Nova tarefinha linda! Edite, complete e delete à vontade!'
    // }
]

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        // case 'ADD_TASK': {
        //     return [
        //         ...state,
        //         {
        //             id: new Date().getTime(),
        //             done: false,
        //             text: action.payload.text
        //         }
        //     ]
        // }

        // case 'REMOVE_TASK': {
        //     return state.filter(task => task.id !== action.payload.id)
        // }

        case 'EDIT_TASK': {
            const result = state.map(task =>
                task.id === action.payload.id ? 
                    { ...task, text: action.payload.text } 
                    : task
            )
            console.log(result)
            return result
        }

        // case 'MARK_TASK_AS_COMPLETE': {
        //     // let copyState = [...state]
        //     // let thisTask = copyState.find(task => task.id === action.payload.id)
        //     // thisTask.done = !thisTask.done
        //     // return copyState
        //     const newState = state.map(task => {
        //         if (task.id === action.payload.id) {
        //             return {
        //                 ...task,
        //                 done: !task.done
        //             }
        //         }
        //         return task
        //     })
        //     return newState

        // }

        // case 'MARK_ALL_TASKS_AS_COMPLETE': {
        //     const newState = state.map(task => {
        //             return {
        //                 ...task,
        //                 done: true
        //         }
        //     })
        //     return newState

        // }

        // case 'REMOVE_COMPLETE_TASK': {
        //     const newState = state.filter(task => {
        //         if(task.done) {
        //             return false
        //         }
        //         return true
        //     })
        //     return newState
        // }

        // Novas ações síncronas
        case "SET_TASKS":
            return action.payload.tasks;

        // Novas ações assíncronas

        default:
            return state;
    }
};

export default tasksReducer;

