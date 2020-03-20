const initialState = {
  profile: null,
  matches: [],
  matchesCount: 0,
  selectedPerson: null,
}

const profiles = (state = initialState, action) => {
  switch (action.type) {

    case "SET_PROFILE":
      return { profile: action.payload.profile }

    case 'SET_MATCHES':
      const matchesList = action.payload.matches // pq dei um get nele
      return {
        ...state,
        matches: matchesList
      }

    case 'COUNT_MATCHES':
      const numberOfMatches = action.payload.matches // pq dei get no length dele
      console.log(numberOfMatches)
      return {
        ...state,
        matchesCount: numberOfMatches
      }

    case 'SET_SELECTED_PROFILE':
      // console.log(state.matches)
      const user = state.matches.filter(person => person.id === action.payload.id)
      // console.log(user)
      return {
        ...state,
        selectedPerson: user[0]
      }


    default:
      return state
  }

}

export default profiles
