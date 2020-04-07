import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions'

import Loading from '../../components/Loading/'

import { TextField } from "@material-ui/core";
import { BoxPostWrapper, ButtonStyled, FormCreatePost, TitleCreatePost, DivHeaderCreatePost } from './styles'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createPostData: {},
            loading: false
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        await this.props.createPost(this.state.createPostData)
        this.setState({
            createPostData: {
                title: '',
                text: ''
            },
            loading: false
        })
    }

    handleTextFieldChange = (event) => {
        this.setState({
            createPostData: {
                ...this.state.createPostData,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        const user = localStorage.getItem('user')
        const newUser = JSON.parse(user)

        return (
            <>
                <Loading open={this.state.loading} />

                <BoxPostWrapper>

                    <FormCreatePost
                        autoComplete="on"
                        onSubmit={this.handleSubmission}>

                        <DivHeaderCreatePost>
                            <TitleCreatePost variant="h6" component="p">
                                Olá <strong>{newUser.username}</strong>!
                            </TitleCreatePost>

                            <TitleCreatePost variant="h4" component="p">
                                Criar publicação
                            </TitleCreatePost>
                        </DivHeaderCreatePost>


                        <TextField id="titulo" label="Título" variant="outlined"
                            type="text"
                            required
                            inputProps={{
                                pattern: ".{1,}",
                                maxLength: 50,
                                title: "O campo Título não pode ficar vazio."
                            }}
                            name="title"
                            value={this.state.createPostData.title || ""}
                            onChange={this.handleTextFieldChange}
                        />

                        <TextField id="post" label="Escreva aqui" margin="normal" variant="outlined" multiline rows={5}
                            type="text"
                            required
                            inputProps={{
                                pattern: ".{1,}",
                                maxLength: 280,
                                title: "O campo Post não pode ficar vazio."
                            }}
                            name="text"
                            value={this.state.createPostData.text || ""}
                            onChange={this.handleTextFieldChange}
                        />

                        <ButtonStyled type="submit" color="primary" variant="contained"> Postar </ButtonStyled>
                    </FormCreatePost>
                </BoxPostWrapper>

            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (createPostData) => dispatch(createPost(createPostData)),
})

export default connect(null, mapDispatchToProps)(CreatePost);