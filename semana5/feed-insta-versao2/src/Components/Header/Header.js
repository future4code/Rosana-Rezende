import React from 'react';
import './Header.css'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  display: flex;
  justify-content: space-evenly;
  padding: 2vh 0;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
`

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>

        <div className='esquerda'>
          <i className="fab fa-instagram"></i>
          <img src={require('./insta.png')} alt='' />

        </div>

        <div className='pesquisar'>
          <i className="material-icons" style={{ color: "#A8A8A8" }}>search</i>
          <input type="text" placeholder=" Pesquisar"></input>
        </div>

        <div className='direita'>
          <i className="material-icons">explore</i>
          <i className="material-icons">favorite_border</i>
          <i className="material-icons">perm_identity</i>
        </div>
                
            </Container>
        )
    }

}

export default Header