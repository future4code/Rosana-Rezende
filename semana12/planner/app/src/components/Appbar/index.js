import React from "react";
import { connect } from "react-redux";
import { ToolbarStyled, Link } from './styles'
import { AppBar, Typography } from '@material-ui/core'

export const Appbar = () => {

  return (
      <AppBar id="appbar">
        <ToolbarStyled variant="dense">
          <Typography variant='h5' color="inherit">
            Planner
          </Typography>
          <Typography variant='body2' color="textSecondary">
            by <Link href="https://github.com/rosanarezende">Rosana Rezende</Link>
          </Typography>
        </ToolbarStyled>
      </AppBar>
  );
}

export default connect()(Appbar);