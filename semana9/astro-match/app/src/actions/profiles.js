import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rosana'

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
	dispatch(upCountMatches()) // atualiza quando limpo
}

export const setProfile = profile => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile: profile
		}
	};
};

export const getProfile = () => async (dispatch, getState) => {
	try {
		const result = await axios.get(
			`${baseUrl}/person`
		);
		// dispatch(upCountMatches()) // chama quando carrega a página
		dispatch(setProfile(result.data.profile));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};

export const choosePerson = (id, choice) => async (dispatch, getState) => {
	try {
		const result = await axios.post(
			`${baseUrl}/choose-person`,
			{
				id,
				choice
            }
		);
		dispatch(getProfile(result.data.profile));
		// dispatch(setProfile(result.data.profile));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};



export const setMatches = matches => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches: matches
		}
	};
};

export const getMatches = () => async (dispatch, getState) => {
	try {
		const result = await axios.get(
			`${baseUrl}/matches`
		);
		// console.log(result.data.matches)
		dispatch(setMatches(result.data.matches));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};



// basicamente, igual ao setMatches
	// a diferença é que, abaixo, dou um get no length dele
export const countMatches = (matches) => {
	return {
		type: 'COUNT_MATCHES',
		payload: {
			matches: matches
		}
	};
};

export const upCountMatches = () => async (dispatch, getState) => {
	try {
		const result = await axios.get(
			`${baseUrl}/matches`
		);
		dispatch(countMatches(result.data.matches.length));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};


export const setSelectedProfile = id => {
	return {
		type: "SET_SELECTED_PROFILE",
		payload: {
			id: id
		}
	};
};

export const setNewMatches = id => {
	return {
		type: "SET_NEW_MATCHES",
		payload: {
			id: id
		}
	};
};
