import React from 'react';

import CheckAllComplete from './CheckAllComplete';
import RemoveAllComplete from './RemoveAllComplete';
import FilterTasks from './FilterTasks';

import Grid from '@material-ui/core/Grid';

function TaskFooter() {
    return (
        <Grid container className='rodape'>
            <CheckAllComplete />
            <FilterTasks />
            <RemoveAllComplete />
        </Grid>
    );
}

export default TaskFooter;
