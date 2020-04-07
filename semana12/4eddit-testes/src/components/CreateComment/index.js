import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from '../../actions'
import Loading from '../../components/Loading/'

import { TextField } from "@material-ui/core";

import { BoxCommentWrapper, ButtonStyled, FormCreateComment, TitleCreateComment } from './styles'

class CreateComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: "",
            loading: false
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        await this.props.createComment(this.state.commentText, this.props.postId)
        this.setState({
            commentText: "",
            loading: false
        })
    }

    handleTextFieldChange = (event) => {
        this.setState({ commentText: event.target.value })
    }

    render() {
        return (
            <>
                <Loading open={this.state.loading} />

                <BoxCommentWrapper>
                    <FormCreateComment
                        autoComplete="off"
                        onSubmit={this.handleSubmission}>

                        <TitleCreateComment variant="h6" component="p">
                            Criar Comentário
                        </TitleCreateComment>

                        <TextField id="comment" label="Escreva seu comentário" variant="outlined" multiline rows={2}
                            type="text"
                            required
                            inputProps={{
                                pattern: ".{1,}",
                                maxLength: 180,
                                title: "O campo Comentário não pode ficar vazio."
                            }}
                            value={this.state.commentText}
                            onChange={this.handleTextFieldChange}
                        />
                        
                        <ButtonStyled type="submit" color="primary" variant="contained"> Comentar </ButtonStyled>
                    </FormCreateComment>
                </BoxCommentWrapper>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        postId: state.posts.postId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (createCommentData, postId) => dispatch(createComment(createCommentData, postId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
