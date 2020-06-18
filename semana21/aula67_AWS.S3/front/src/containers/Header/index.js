import React from 'react'
import { AppBar, Toolbar, Typography} from "@material-ui/core"

function Header() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit">
                    File Upload System
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
