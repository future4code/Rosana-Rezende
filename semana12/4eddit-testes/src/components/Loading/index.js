import React from 'react'
import { CircularProgress } from "@material-ui/core";
import { BackdropStyled } from './styles'

export default class Loading extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open
        }
    }

    handleClose = () => { // a pessoa pode fechar se algo der errado, ou se não gosta de ver o loading
        this.setState({open: false});
     };

    render(){
        const { open } = this.state
        return(
                <BackdropStyled open={open} onClick={this.handleClose}>
                    <CircularProgress/> 
                </BackdropStyled>
        )
    }
}

// USANDO HOOKS - deixei comentado para fins didáticos
// import React, { useState } from 'react'
// import { CircularProgress } from "@material-ui/core";
// import { BackdropStyled } from './styles'

// export default function Loading(props) {
//     const [open, setOpen] = useState(props.open)

//     const handleClose = () => { 
//         setOpen(false);
//     };

//     return (<BackdropStyled open={open} onClick={handleClose}>
//             <CircularProgress />
//         </BackdropStyled>)
// }