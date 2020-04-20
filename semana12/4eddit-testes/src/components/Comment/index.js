import React from "react";
import { connect } from "react-redux";
import { voteComment } from '../../actions'

import { turnsDate } from '../../constants'

import { CardContent, Typography, CardActions, IconButton, CardHeader } from "@material-ui/core";
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';

import { CardPost, Date, AvatarStyled } from './styles'

function Comment(props) {

    const onClickCommentUp = (commentId) => {
        const { voteComment, postId } = props
        const thisDirection = + 1
        voteComment(postId, commentId, thisDirection)
    }

    const onClickCommentDown = (commentId) => {
        const { voteComment, postId } = props
        const thisDirection = - 1
        voteComment(postId, commentId, thisDirection)
    }

    const onClickClearVoteComment = (commentId) => {
        const { voteComment, postId } = props
        const thisDirection = 0
        voteComment(postId, commentId, thisDirection)
    }

    const { comment } = props
    const date = turnsDate(comment.createdAt)
    const newAvatar = comment.username.slice(0, 1).toUpperCase()

    return (
        <CardPost>
            <CardHeader
                subheader={
                    <Typography>
                        {comment.username} <Date>{date}</Date>
                    </Typography>
                }
                avatar={
                    <AvatarStyled aria-label="recipe">
                        {newAvatar}
                    </AvatarStyled>
                }
            />

            <CardContent>
                <Typography variant="body2" component="p">
                    {comment.text}
                </Typography>
            </CardContent>

            <CardActions>

                {comment.userVoteDirection === 1 ?
                    <IconButton onClick={() => onClickClearVoteComment(comment.id)}>
                        <ArrowUpwardRounded />
                    </IconButton>
                    :
                    <IconButton onClick={() => onClickCommentUp(comment.id)}>
                        <ArrowUpwardRounded color="primary" />
                    </IconButton>
                }

                <Typography>
                    {comment.votesCount ? comment.votesCount : 0}
                </Typography>

                {comment.userVoteDirection === -1 ?
                    <IconButton onClick={() => onClickClearVoteComment(comment.id)}>
                        <ArrowDownwardRounded />
                    </IconButton>
                    :
                    <IconButton onClick={() => onClickCommentDown(comment.id)}>
                        <ArrowDownwardRounded color="secondary" />
                    </IconButton>
                }

            </CardActions>
        </CardPost>
    )
}

const mapStateToProps = (state) => {
    return {
        postId: state.posts.postId
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (postId, commentId, direction) => dispatch(voteComment(postId, commentId, direction)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);