import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rosana'

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}/clear`)
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

		dispatch(setProfile(result.data.profile));
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

		dispatch(setMatches(result.data.profile));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};



export const choosePerson = (id, choise) => async (dispatch, getState) => {
	try {
		const result = await axios.post(
			`${baseUrl}/choose-person`,
			{
				id,
				choise
            }
		);

		dispatch(getProfile(result.data.profile));
	} catch (error) {
		console.log("Errinho lindo, preciso tratar.", error);
	}
};

// dúvida... tem esse Id ou não? é como lá em cima?
// export const clearOne = (id) => async (dispatch, getState) => {
// 	try {
// 		const result = await axios.post(
// 			`${baseUrl}/clear`,
// 			{
// 				id
//             }
// 		);

// 		dispatch(setProfile(result.data.profile));
// 	} catch (error) {
// 		console.log("Errinho lindo, preciso tratar.", error);
// 	}
// };