import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { 
    // removeCompleteTasks, 
    deleteAllTask 
} from '../actions'

function RemoveAllComplete(props) {
    return (
        <Grid item>
            <Button 
                // onClick={props.onRemoveCompleteTasks}
                onClick={props.onDeleteAllTask}
            >
                Remover completas
            </Button>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        // onRemoveCompleteTasks: () => dispatch(removeCompleteTasks()),
        onDeleteAllTask: () => dispatch(deleteAllTask())
    }
}

export default connect(null, mapDispatchToProps)(RemoveAllComplete);
