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


// NÃO DEU CERTO
const addTrip = (trip) => ({
	type: 'ADD_TRIP',
	payload: {
		trip
	}
})


export const createTrip = trip => async (dispatch) => {

	try {
		// const response = await axios.post(`${baseUrl}/trips`, {trip: trip})
		// console.log(response.data)
		// dispatch(addTrip())
		console.log('Deu certo', trip)
    } catch(error) {
        console.log('Errinho lindo no createTrip, preciso tratar', error)
    }

}


export const applyToTrip = (form) => async (dispatch) => {
	try {
		const apllication = {...form}
		const id = form.tripSelectedId
		delete apllication.tripSelectedId
		// console.log('Deu certo', 'apllication: ', apllication, 'id: ', id)
		await axios.post(`${baseUrl}/trips/${id}/apply`, apllication)
	} catch(error) {
        console.log('Errinho lindo no applyToTrip, preciso tratar', error)
    }
}
