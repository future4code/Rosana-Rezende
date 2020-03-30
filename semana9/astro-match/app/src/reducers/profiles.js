const initialState = {
  profile: null,
  matches: [],
  matchesCount: 0,
  selectedPerson: null,
  makeMatch: false
}

const profiles = (state = initialState, action) => {
  switch (action.type) {

    case "SET_PROFILE":
      return { 
        ...state,
        profile: action.payload.profile 
      }

    case 'SET_MATCHES':
      const matchesList = action.payload.matches // pq dei um get nele
      return {
        ...state,
        matches: matchesList
      }

    case 'COUNT_MATCHES':
      const numberOfMatches = action.payload.num // pq dei get no length dele
      // console.log(numberOfMatches)
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
    
    case 'MAKE_MATCH':
      let result  = action.payload.thisMatch
      return {
        ...state,
        makeMatch: result
      }
    
    case 'HIDE_MESSAGE':
      return {
        ...state,
        makeMatch: false
      }

    
      // deletando match
      // case 'SET_NEW_MATCHES':
      // // console.log(state.matches)
      // const listOtherUsers = state.matches.filter(person => person.id !== action.payload.id)
      // // console.log(listOtherUsers)
      // return {
      //   ...state,
      //   matches: listOtherUsers
      // }


    default:
      return state
  }

}

export default profiles
