const initialState = {
  profile: null,
  matches: [],
  listWithSelectedPerson: []
}

const profiles = (state = initialState, action) => {
  switch (action.type) {

    case "SET_PROFILE":
      return { profile: action.payload.profile }

    case 'SET_MATCHES':
      return {
        // ...state, 
        matches: action.payload.matches
      }

    case 'SET_SELECTED_PROFILE':
      // console.log(state.matches)
      const list = state.matches.map(person => person.id === action.payload.id && person)
      // console.log(list)
      return { listWithSelectedPerson: list}

    default:
      return state
  }

}

export default profiles
