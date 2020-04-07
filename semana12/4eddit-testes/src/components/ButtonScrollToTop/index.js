import React from "react";
import { ButtonTop } from './styles'
import { Publish } from '@material-ui/icons';

function ButtonScrollToTop(){
    
    const scrollToTop = () => {
        window.scroll({
          top: 0,
          behavior: 'smooth'
      });
      }

    return(
        <ButtonTop onClick={scrollToTop} color="primary" size="medium">
          <Publish/>
        </ButtonTop>
    )
}

export default ButtonScrollToTop