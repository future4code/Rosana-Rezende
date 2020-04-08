const initialState = {
    allTasks: [
        // {
        //     text: "testando segunda",
        //     day: "Segunda"
        //   },
        //   {
        //     text: "testando segunda mais uma vez",
        //     day: "Segunda"
        //   },
        //   {
        //     text: "testando terça",
        //     day: "Terça"
        //   },
    ]
}

const tasks = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_TASKS':
            return {
                ...state,
                allTasks: action.payload.tasks
            }

        default:
            return state
    }
}

export default tasks