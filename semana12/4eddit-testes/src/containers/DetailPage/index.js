import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'

import { DetailWrapper } from './styles'

import { getPostsDetail, setPostDetail } from '../../actions'

import Appbar from "../../components/Appbar";
import Loading from '../../components/Loading/'
import PostInDetail from "../../components/PostInDetail";
import CreateComment from "../../components/CreateComment";
import Comment from "../../components/Comment";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";

class DetailPage extends Component {

  componentDidMount = () => {
    const { getPostsDetail, postId, goToFeed } = this.props
    if(postId === null) { // pessoa logada acessa rota
      goToFeed()
      return
    }
    getPostsDetail(postId)
  }

  componentWillUnmount = () => {
      this.props.setPostDetail(null)
  }  

  render() {
    const { postDetail } = this.props

    let newComments = []
    if (postDetail !== null) { // null - pessoa logada, acessa a rota diretamente
      newComments = [...postDetail.comments]
    }

    const ordenedComments = newComments.sort((a, b) => {
      return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
    })

    return (
      <>
        <Appbar page={"detail"} />
        <ButtonScrollToTop/>

        { postDetail

          ? (<DetailWrapper>

            <PostInDetail post={postDetail} />

            <CreateComment />

            {ordenedComments
              ? ordenedComments.map(comment => <Comment comment={comment} key={comment.id} />)
              : <Loading open={true} />
            }

          </DetailWrapper>)


          : (<Loading open={true} />)

        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postId: state.posts.postId,
    postDetail: state.posts.postDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPostsDetail: (postId) => dispatch(getPostsDetail(postId)),
      goToFeed: () => dispatch(push(routes.feed)),
      setPostDetail: (post) => dispatch(setPostDetail(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);