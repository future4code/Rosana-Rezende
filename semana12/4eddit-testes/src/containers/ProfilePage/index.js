import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from '../../actions'

import CreatePost from "../../components/CreatePost"
import Post from "../../components/Post"
import Appbar from "../../components/Appbar";
import Loading from '../../components/Loading'

import { ProfileWrapper } from './styles'
import ButtonScrollToTop from "../../components/ButtonScrollToTop";

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createPostData: {},
      loading: false
    }
  }

  componentDidMount = () => {
    this.props.getPosts()
  }

  render() {
    const { allPosts } = this.props

    const newAllPosts = [...allPosts]
    const ordenedPosts = newAllPosts.sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    })

    const user = localStorage.getItem('user')
    const newUser = JSON.parse(user)
    const myPosts = ordenedPosts.filter(post => post.username === newUser.username)

    return (
      <>
        <Appbar page={"profile"} />
        <Loading open={this.state.loading} />
        <ButtonScrollToTop/>

        <ProfileWrapper>

          <CreatePost />

          { myPosts.length > 0 
            ? myPosts.map(post => <Post post={post} key={post.id} />)
            : <Loading open={true} />
          }

        </ProfileWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts.allPosts
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);