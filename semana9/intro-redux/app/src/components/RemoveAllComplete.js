import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { removeCompleteTasks } from '../actions'

function RemoveAllComplete(props) {
    return (
        <Grid item>
            <Button 
                onClick={props.onRemoveCompleteTasks}
            >
                Remover completas
            </Button>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCompleteTasks: () => dispatch(removeCompleteTasks())
    }
}

export default connect(null, mapDispatchToProps)(RemoveAllComplete);
