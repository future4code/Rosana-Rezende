import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/rosana'

const setTrips = (trips) => ({
	type: 'SET_TRIPS',
	payload: {
		trips
	}
})

export const getTrips = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/trips`)
        dispatch(setTrips(response.data.trips))
    } catch(error) {
        console.log('Errinho lindo no getTrips, preciso tratar', error)
    }

}


export const setSeletctedTrip = id => {
	return {
		type: "SET_SELECTED_TRIP",
		payload: {
			id: id
		}
	};
};
