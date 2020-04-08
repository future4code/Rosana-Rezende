import React from "react";
import { connect } from "react-redux";
import { ToolbarStyled } from './styles'
import { AppBar, Typography } from '@material-ui/core'

const Appbar = () => {

  return (
      <AppBar>
        <ToolbarStyled variant="dense">
          
          <Typography variant='h5' color="inherit">
            Planner
          </Typography>

        </ToolbarStyled>
      </AppBar>
  );
}

export default connect()(Appbar);