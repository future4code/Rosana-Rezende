const initialState = {
    user: null
}

const user = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.payload.userData
            }

        default:
            return state
    }
}

export default user