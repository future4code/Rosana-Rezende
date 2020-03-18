import React from 'react';

import styled from 'styled-components'

import CheckAllComplete from '../components/CheckAllComplete';
import RemoveAllComplete from '../components/RemoveAllComplete';
import FilterTasks from '../components/FilterTasks';

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
