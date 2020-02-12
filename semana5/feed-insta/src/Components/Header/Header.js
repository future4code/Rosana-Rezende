import React from 'react'
import './Header.css'

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Header'>

                <div className='esquerda'>
                <i class="fab fa-instagram"></i>  
                <img src={ require('./insta.png') } alt='' />

                </div>

                <div className='pesquisar'>
                    <i class="material-icons" style={ {color:"#A8A8A8"} }>search</i>
                    <input type="text" autocapitalize="none" placeholder=" Pesquisar"></input>
                </div>

                <div className='direita'>
                    <i class="material-icons">explore</i>
                    <i class="material-icons">favorite_border</i>
                    <i class="material-icons">perm_identity</i>
                </div>

            </div>
        )
    }


}

export default Header