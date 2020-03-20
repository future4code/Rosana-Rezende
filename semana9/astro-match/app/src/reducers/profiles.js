const initialState = {
  profile: null,
  matches: [],
  selectedPerson: null,
  matchesCount: 0
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
    
    case 'UP_COUNT_MATCHES':
      const numberOfMatches = action.payload.count
      // console.log(numberOfMatches)
      return {
        ...state,
        matchesCount: numberOfMatches
      }

    default:
      return state
  }

}

export default profiles
