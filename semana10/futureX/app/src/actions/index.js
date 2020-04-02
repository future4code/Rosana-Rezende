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
		console.error(error.message)
		alert('Não foi possível acessar a lista de viagens')
	}
}

export const login = (loginData) => async (dispatch) => {
	// console.log(loginData)
	try {
		const response = await axios.post(`${baseUrl}/login`, loginData) // verica se usuário ou senhas estão corretos
		// console.log(response.data) // retorna sucess, token e user
		const token = response.data.token
		const user = response.data.user
		// console.log(user)
		localStorage.setItem('token', token)
		localStorage.setItem('user', JSON.stringify(user))
		dispatch(push(routes.list))
	} catch (error) {
		console.error(error.message)
		alert('Email e/ou senha inválidos')
	}
}

export const setTripDetail = (trip) => ({
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
		alert('Não foi possível acessar os detalhes da viagem selecionada')
	}
};

export const applyToTrip = (form) => async (dispatch) => {
	try {
		const apllication = { ...form }
		const id = form.tripSelectedId
		delete apllication.tripSelectedId
		// console.log('Deu certo', 'apllication: ', apllication, 'id: ', id)
		await axios.post(`${baseUrl}/trips/${id}/apply`, apllication)
		alert('Aplicação feita com sucesso!')
	} catch (error) {
		console.error(error.message)
		alert('Não foi possível realizar a aplicação! Tente novamente mais tarde.')
	}
}

export const createTrip = trip => async (dispatch) => {
	try {
		let oldDate = trip.date.split('-')
		let day = Number(oldDate[2])
		let month = Number(oldDate[1])
		let year = Number(oldDate[0])
		let newDate = `${day}/${month}/${year}`
		const tripFormated = {
			name: trip.name,
			planet: trip.planet,
			date: newDate,
			description: trip.description,
			durationInDays: trip.durationInDays
		}
		const token = localStorage.getItem('token')
		// console.log('Deu certo', tripFormated, token)
		await axios.post(
			`${baseUrl}/trips`,
			tripFormated,
			{
				headers: { auth: token }
			})
		alert('Viagem espacial cadastrada com sucesso!')
	} catch (error) {
		console.error(error.message)
		alert('Não foi possível cadastrar a viagem! Tente novamente mais tarde.')
	}
}

export const decideCandidate = (tripId, candidateId) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token')
		// console.log(tripId, candidateId)
		await axios.put(
			`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`,
			{ "approve": true },
			{ headers: { auth: token } }
		)
		alert('Candidato aprovado com sucesso!')
		dispatch(getTripDetail(tripId))
	} catch (error) {
		console.error(error.message)
		alert('Não foi possível realizar a escolha! Tente novamente mais tarde.')
	}
}