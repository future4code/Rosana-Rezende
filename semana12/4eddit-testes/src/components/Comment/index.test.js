import React from "react";
import { shallow } from "enzyme";
import Comment from './index'
import { IconButton } from "@material-ui/core";
// import {  } from './styles'
// import renderer from "react-test-renderer"

import { Provider } from "react-redux";
import { store } from "../../containers/App"


const mockComment = {
    userVoteDirection: 0,
    id: "xevAYfSeiyIYNXwx8a9D",
    username: "Paula",
    createdAt: 1586049738916,
    text: "Isso é um comentário", 
    votesCount: 3,
}

// const mockPostId = "9c7OIK7fWBVtJR24ZaDw"

describe("Comment", () => {

    it('Click Comment Up', () => {
        const mockClickCommentUp = jest.fn()

        const component = shallow(
        <Provider store={store}>
            <Comment 
                comment={mockComment} 
                onClickCommentUp={mockClickCommentUp} 
            />
        </Provider>
        )

        const voteComment = component.find(IconButton)
        console.log(voteComment)

        // o botão existe? espero que sejam 4?
        // expect(voteComment).toHaveLength(4)
        // expect(voteComment).toHaveBeenCalledTimes(4)

        // voteComment.at(1).simulate('click')

        // expect(mockClickCommentUp).toHaveBeenCalledTimes(1)
        // expect(mockClickCommentUp).toHaveBeenCalledWith(mockComment.id);



    })
})