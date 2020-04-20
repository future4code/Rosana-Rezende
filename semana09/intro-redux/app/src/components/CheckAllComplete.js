import React from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import { 
    // markAllTasksAsComplete,
    doneTask
} from '../actions'

function CheckAllComplete(props) {

    const checkAllDone = () => {
        let taskIncomplete = props.tasks.filter(task => !task.done)
        taskIncomplete.forEach(task => {
            props.onDoneTask(task.id)
        })
    }

    return (
        <Grid item>
            <Button 
                // onClick={props.onMarkAllTasksAsComplete}
                onClick={checkAllDone}
            >
                Marcar todas como completas
            </Button>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
	tasks: state.tasksReducer,
})

const mapDispatchToProps = dispatch => {
    return {
        // onMarkAllTasksAsComplete: () => dispatch(markAllTasksAsComplete()),
        onDoneTask: (id) => dispatch(doneTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckAllComplete);
