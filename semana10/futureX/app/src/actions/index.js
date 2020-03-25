import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

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
	} catch (error) {
		console.log('Errinho lindo no getTrips, preciso tratar', error)
	}

}

// const myAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDc5NDV9.cTNMopD35hMpOo34LhvFmmZJmUCrFUQdFECJnG7EvL4'

export const createTrip = trip => async (dispatch) => {
	try {
		const tripFormated = {
			name: trip.name,
			planet: trip.planet,
			date: trip.date,
			description: trip.description,
			durationInDays: trip.durationInDays
		}
		console.log('Deu certo', tripFormated)
		// await axios.post(
		// 	`${baseUrl}/trips`,
		// 	tripFormated,
		// 	{
		// 		headers: { auth: myAuth }
		// 	})
	} catch (error) {
		console.log('Errinho lindo no createTrip, preciso tratar', error)
	}
}


export const applyToTrip = (form) => async (dispatch) => {
	try {
		const apllication = { ...form }
		const id = form.tripSelectedId
		delete apllication.tripSelectedId
		// console.log('Deu certo', 'apllication: ', apllication, 'id: ', id)
		await axios.post(`${baseUrl}/trips/${id}/apply`, apllication)
	} catch (error) {
		console.log('Errinho lindo no applyToTrip, preciso tratar', error)
	}
}



export const login = (loginData) => async (dispatch) => {
	try {
		// console.log(loginData)
		const response = await axios.post(`${baseUrl}/login`, loginData) // verica se usuário ou senhas estão corretos

		// console.log(response.data) // retorna sucess, token e user
		const token = response.data.token
		localStorage.setItem('token', token)

		// entro na página de listas
		dispatch(push(routes.list))

	} catch (error) {
		console.error(error.message)
		alert('Email e/ou senha inválidos')		
	}
}

const setTripDetail = (trip) => ({
	type: 'SET_TRIP_DETAIL',
	payload: {
		trip
	}
})

export const getTripDetail = id => async (dispatch) => {
	// console.log(id)
	try {
		const token = localStorage.getItem('token')
		const response = await axios.get(`${baseUrl}/trip/${id}?=`, {
			headers: {
				auth: token
			}
		})
		dispatch(setTripDetail(response.data.trip))
	} catch (error) {
		console.error(error.message)
		alert('Não foi possível acessar os detalhes da mensagem')
	}


};

