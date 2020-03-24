const initialState = {
    trips: [],
    selectedTrip: null
}

const trips = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.payload.trips
            }

        case 'SET_SELECTED_TRIP':
            const trip = state.trips.filter(trip => trip.id === action.payload.id)
            // console.log(trip)
            return {
                ...state,
                selectedTrip: trip[0]
            }

        default:
            return state
    }
}

export default trips