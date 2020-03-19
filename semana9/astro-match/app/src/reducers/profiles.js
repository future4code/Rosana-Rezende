const initialState = {
  profile: null,
  matches: [],
  selectedPerson: null
}

const profiles = (state = initialState, action) => {
  switch (action.type) {

    case "SET_PROFILE":
      return { profile: action.payload.profile }

    case 'SET_MATCHES':
      return {
        ...state, 
        matches: action.payload.matches
      }

    case 'SET_SELECTED_PROFILE':
      // console.log(state.matches)
      const user = state.matches.filter(person => person.id === action.payload.id)
      // console.log(list)
      return { 
        ...state,
        selectedPerson: user[0]
      }

    default:
      return state
  }

}

export default profiles
