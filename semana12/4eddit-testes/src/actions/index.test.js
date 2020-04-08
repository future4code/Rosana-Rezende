import { 
    setPosts,
    setFilteredPosts,
    setInputSearch,
    setPostId,
    setPostDetail, 

    signup,
} from "./index"

// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

describe('Posts Action-Creators', () => {

    it('Set Posts', () => {
        const mockPosts = "test"
        const mockedAction = setPosts(mockPosts)

        expect(mockedAction.type).toEqual("SET_POSTS")
        expect(mockedAction.payload.posts).toBeDefined()
        expect(mockedAction.payload.posts).toEqual(mockPosts)

    })

    it('Set Filtered Posts', () => {
        const mockPosts = "test"
        const mockedAction = setFilteredPosts(mockPosts)

        expect(mockedAction.type).toEqual("SET_FILTERED_POSTS")
        expect(mockedAction.payload.posts).toBeDefined()
        expect(mockedAction.payload.posts).toEqual(mockPosts)
        
    })

    it('Set Input Search', () => {
        const mockInputData = "test"
        const mockedAction = setInputSearch(mockInputData)

        expect(mockedAction.type).toEqual("SET_INPUT_SEARCH")
        expect(mockedAction.payload.inputData).toBeDefined()
        expect(mockedAction.payload.inputData).toEqual(mockInputData)

    })

    it('Set Post Id', () => {
        const mockId = "test"
        const mockedAction = setPostId(mockId)

        expect(mockedAction.type).toEqual("SET_POST_ID")
        expect(mockedAction.payload.id).toBeDefined()
        expect(mockedAction.payload.id).toEqual(mockId)

    })

    it('Set Post Detail', () => {
        const mockPost = "test"
        const mockedAction = setPostDetail(mockPost)

        expect(mockedAction.type).toEqual("SET_POST_DETAIL")
        expect(mockedAction.payload.post).toBeDefined()
        expect(mockedAction.payload.post).toEqual(mockPost)

    })    

})

describe('Async actions', () => {

    // afterEach(() => {
    //     fetchMock.restore()
    // })

    it('Sigup', () => {
        // não sei exatamente o que ele espera, mas acho que é assim
        const mockRegisterData = {
            email: "teste@email.com",
            password: "qwerty",
            username: "User Test"
        }
        const mockedAction = signup(mockRegisterData)
        console.log(mockedAction)
        // const store = mockStore({})

        // return store.dispatch(signup()).then(() => {
        //     expect(store.getActions()).toEqual(mockedAction)
        // })

    })


})