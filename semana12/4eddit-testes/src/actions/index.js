import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";

// const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"
const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit"
const getToken = () => localStorage.getItem("token")

export const signup = (registerData) => async (dispatch) => {
    const newData = {
        email: registerData.email,
        password: registerData.password,
        username: registerData.username
    }
    try {
        const response = await axios.post(`${baseUrl}/signup`, newData)
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(push(routes.feed))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível efetuar cadastro.")
    }
}

export const login = (loginData) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, loginData)
        const token = response.data.token
        const user = response.data.user
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(push(routes.feed))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível efetuar o login.")
    }
}


export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: {
        posts
    }
})

export const setFilteredPosts = (posts) => ({
    type: 'SET_FILTERED_POSTS',
    payload: {
        posts
    }
})

export const setInputSearch = (inputData) => ({
    type: 'SET_INPUT_SEARCH',
    payload: {
        inputData
    }
})

export const getPosts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/posts`, {
            headers: {
                auth: getToken()
            }
        })
        dispatch(setPosts(response.data.posts))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível acessar a lista de posts.")
    }

}

export const createPost = (createPostData) => async (dispatch) => {
    const newData = {
        text: createPostData.text,
        title: createPostData.title
    }
    try {
        await axios.post(`${baseUrl}/posts`,
            newData,
            {
                headers: {
                    auth: getToken()
                }
            }
        )
        dispatch(getPosts())
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível criar seu post.")
    }
}

export const vote = (id, direction) => async (dispatch, getState) => {
    try {
        await axios.put(`${baseUrl}/posts/${id}/vote`,
            { direction: direction },
            {
                headers: {
                    auth: getToken()
                }
            }
        )
        dispatch(getPosts())
        // const state = getState();
        // if(state.posts.postId){
        //     dispatch(getPostsDetail(state.posts.postId))
        // }
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível votar no post.")
    }
}

export const voteInDetail = (id, direction) => async (dispatch, getState) => {
    try {
        await axios.put(`${baseUrl}/posts/${id}/vote`,
            { direction: direction },
            {
                headers: {
                    auth: getToken()
                }
            }
        )
        dispatch(getPostsDetail(id))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível votar no post.")
    }
}

const setPostId = (id) => ({
    type: 'SET_POST_ID',
    payload: {
        id
    }
})

export const getPostId = (postId) => async (dispatch) => {
    dispatch(setPostId(postId))
    dispatch(push(routes.detail))
}


export const setPostDetail = (post) => ({
    type: 'SET_POST_DETAIL',
    payload: {
        post
    }
})

export const getPostsDetail = (postId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/posts/${postId}`, {
            headers: {
                auth: getToken()
            }
        })
        dispatch(setPostDetail(response.data.post))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível acessar os detalhes do post.")
    }
}


export const createComment = (createCommentData, postId) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/posts/${postId}/comment`,
            { text: createCommentData },
            {
                headers: {
                    auth: getToken()
                }
            }
        )
        dispatch(getPostsDetail(postId))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível criar seu comentário.")
    }
}

export const voteComment = (postId, commentId, direction) => async (dispatch) => {
    try {
        await axios.put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`,
            { direction: direction },
            {
                headers: {
                    auth: getToken()
                }
            }
        )
        dispatch(getPostsDetail(postId))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível votar no comentário.")
    }
}