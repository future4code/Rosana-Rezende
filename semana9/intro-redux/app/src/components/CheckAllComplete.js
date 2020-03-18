import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// import { markAllTasksAsComplete } from '../actions'

function CheckAllComplete(props) {
    return (
        <Grid item>
            <Button 
                // onClick={() => props.onMarkAllTasksAsComplete()}
            >
                Marcar todas como completas
            </Button>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        // onMarkAllTasksAsComplete: () => dispatch(markAllTasksAsComplete),
    }
}

export default connect(null, mapDispatchToProps)(CheckAllComplete);
