const initialState = {
    allPosts: [],
    postDetail: null,
    postId: null,
    filteredPosts: [],
    inputSearch: ''
}

const posts = (state = initialState, action) => {
    switch (action.type) {

        case "SET_POSTS":
            return {
                ...state,
                allPosts: action.payload.posts,
                filteredPosts: action.payload.posts // ATENÇÃO
            }

        case "SET_POST_DETAIL":
            return {
                ...state,
                postDetail: action.payload.post
            }

        case "SET_POST_ID":
            return {
                ...state,
                postId: action.payload.id
            }

        case "SET_FILTERED_POSTS":
            return {
                ...state,
                filteredPosts: action.payload.posts // ATENÇÃO
            }

        case "SET_INPUT_SEARCH":
            return {
                ...state,
                inputSearch: action.payload.inputData
            }

        default:
            return state

    }
}

export default posts