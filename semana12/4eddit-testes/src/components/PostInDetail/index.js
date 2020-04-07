import React from "react";
import { connect } from "react-redux";
import { voteInDetail, getPostsDetail, getPostId } from '../../actions'

import { turnsDate } from '../../constants'

import { Typography, IconButton, CardHeader } from "@material-ui/core";
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';

import { CardPost, PostFooter, VotesWrapper, Image, AvatarStyled, Date, CardContentStyled } from './styles'

function PostInDetail(props) {

    const onClickClearVote = (postId) => {
        const thisDirection = 0
        props.voteInDetail(postId, thisDirection)
    }

    const onclickUp = (postId) => {
        const thisDirection = + 1
        props.voteInDetail(postId, thisDirection)
    }

    const onclickDown = (postId) => {
        const thisDirection = - 1
        props.voteInDetail(postId, thisDirection)
    }

    const { post } = props
    const date = turnsDate(post.createdAt)
    const newAvatar = post.username.slice(0, 1).toUpperCase()

    return (
        <CardPost>

            <CardHeader
                title={
                    <Typography variant="h5" component="p">
                        {post.title}
                    </Typography>
                }
                subheader={
                    <Typography>
                        {post.username} <Date>{date}</Date>
                    </Typography>
                }
                avatar={
                    <AvatarStyled aria-label="recipe">
                        {newAvatar}
                    </AvatarStyled>
                }
            />
            <CardContentStyled>
                {/* Fazendo uma brincadeirinha no front - sabemos que só vai funcionar no nosso site ;) */}
                {post.text.includes('.jpeg') || post.text.includes('.png') || post.text.includes('.gif') ?
                    <Image src={post.text} />
                    :
                    <Typography variant="body1" component="p">
                        {post.text}
                    </Typography>
                }
            </CardContentStyled>

            <PostFooter>
                <VotesWrapper>

                    {post.userVoteDirection === 1 ?
                        <IconButton onClick={() => onClickClearVote(post.id)}>
                            <ArrowUpwardRounded />
                        </IconButton>
                        :
                        <IconButton onClick={() => onclickUp(post.id)}>
                            <ArrowUpwardRounded color="primary" />
                        </IconButton>
                    }

                    <Typography>
                        {post.votesCount}
                    </Typography>

                    {post.userVoteDirection === -1 ?
                        <IconButton onClick={() => onClickClearVote(post.id)}>
                            <ArrowDownwardRounded />
                        </IconButton>
                        :
                        <IconButton onClick={() => onclickDown(post.id)}>
                            <ArrowDownwardRounded color="secondary" />
                        </IconButton>
                    }

                </VotesWrapper>

                <Typography>
                    {post.commentsCount} {post.commentsCount === 1 ? 'comentário' : 'comentários'}
                </Typography>
            </PostFooter>

        </CardPost>
    )
}

const mapDispatchToProps = (dispatch) => ({
    voteInDetail: (id, direction) => dispatch(voteInDetail(id, direction)),
    getPostsDetail: (postId) => dispatch(getPostsDetail(postId)),
    getPostId: (postId) => dispatch(getPostId(postId)),
})

export default connect(null, mapDispatchToProps)(PostInDetail);