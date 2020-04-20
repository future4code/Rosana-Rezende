import postsReducer from "./posts"
import {
    setPosts,
    setFilteredPosts,
    setInputSearch,
    setPostId,
    setPostDetail
} from "../actions/index"

const mockInitialState = {

    // allPosts: [
    //     {
    //         userVoteDirection: 0,
    //         id: "0COaXIBbosGCvdIMNv9Y",
    //         text: "E ele morreu!",
    //         username: "SeiLa",
    //         createdAt: 1585748516971,
    //         title: "Atirei o pau no gato!",
    //         votesCount: 5,
    //         commentsCount: 15
    //     }
    // ],

    // postDetail: {
    //     comments: [
    //         {
    //             userVoteDirection: 0,
    //             id: "xevAYfSeiyIYNXwx8a9D",
    //             username: "Pedro",
    //             createdAt: 1586049738916,
    //             text: "Muito bom mesmo"
    //         }
    //     ],
    //     userVoteDirection: 0,
    //     id: "lYVDG2cXxaw24hPMpNoy",
    //     votesCount: 1,
    //     commentsCount: 1,
    //     text: "Que dia lindo hoje!",
    //     username: "Mariazinha",
    //     createdAt: 1586049183797,
    //     title: "Oi pessoal!",
    // },

    // postId: "9c7OIK7fWBVtJR24ZaDw",

    // filteredPosts: [
    //     {
    //         userVoteDirection: 1,
    //         id: "0COaXIBbosGCvdIMNv9Y",
    //         text: "E ele morreu!",
    //         username: "SeiLa",
    //         createdAt: 1585748516971,
    //         title: "Atirei o pau no gato!",
    //         votesCount: 5,
    //         commentsCount: 15
    //     }
    // ],

    // inputSearch: 'teste'
    
}

describe("Posts Reducer", () => {

    it("Set Posts", () => {
        const mockPosts = [{}]
        const mockedAction = setPosts(mockPosts)
        const newStore = postsReducer(mockInitialState, mockedAction)

        expect(newStore.allPosts).toHaveLength(1)
    })

    it('Set Filtered Posts', () => {
        const mockPosts = [{}]
        const mockedAction = setFilteredPosts(mockPosts)
        const newStore = postsReducer(mockInitialState, mockedAction)

        expect(newStore.filteredPosts).toHaveLength(1)
        
    })

    it('Set Input Search', () => {
        const mockInputData = "test"
        const mockedAction = setInputSearch(mockInputData)
        const newStore = postsReducer(mockInitialState, mockedAction)
        
        expect(newStore.inputSearch).toBe("test")
    })

    it('Set Post Id', () => {
        const mockId = "1234"
        const mockedAction = setPostId(mockId)
        const newStore = postsReducer(mockInitialState, mockedAction)
        
        expect(newStore.postId).toBe("1234")
    })

    it('Set Post Detail', () => {
        const mockPost = [{}]
        const mockedAction = setPostDetail(mockPost)
        const newStore = postsReducer(mockInitialState, mockedAction)
        
        expect(newStore.postDetail).toHaveLength(1)
    })

})