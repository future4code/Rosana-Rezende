import React from 'react'

import axios from 'axios'
import * as S from './styled'

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

const myauth = 'rosana'

class TelaBuscarMusicas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            escolhePlaylist: false
        }
    }

    render() {

        // let listaPlaylists

        // let listaDeMusicas = (
        //     <>
        //     {/* this.state. */}
        //     {this.state.escolhePlaylist && listaPlaylists}
        //     </>
        // )

        // console.log(this.props.allPlaylistsReceive)

        return (
            <S.Wrapper>
                <S.H2>Buscar Música</S.H2>
                
                <S.Div>
                    <S.Input/>
                    <S.Botao>Buscar</S.Botao>
                </S.Div>

                <S.Div>
                    {/* Musicas */}
                    Em construção ...
                </S.Div>

                <S.Div>
                    {/* Respostas */}
                </S.Div>

            </S.Wrapper>
        )
    }
}

export default TelaBuscarMusicas