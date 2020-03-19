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

export const fetchProfile = () => async (dispatch, getState) => {
    const result = await axios.get(
        `${baseUrl}/person`
    );

    dispatch(setProfile(result.data.profile));
};