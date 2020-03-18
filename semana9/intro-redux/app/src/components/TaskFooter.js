import React from 'react';

import styled from 'styled-components'

import CheckAllComplete from './CheckAllComplete';
import RemoveAllComplete from './RemoveAllComplete';
import FilterTasks from './FilterTasks';

import Grid from '@material-ui/core/Grid';

const GridRodape = styled(Grid)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1rem;
    align-items: center;
`

function TaskFooter() {
    return (
        <GridRodape container>
            <CheckAllComplete />
            <FilterTasks />
            <RemoveAllComplete />
        </GridRodape>
    );
}

export default TaskFooter;
