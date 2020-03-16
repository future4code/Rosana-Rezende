import React from 'react';

import styled from 'styled-components'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Wrapper = styled.div`
  max-width: 80vh;
  margin: auto;
`

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tarefas: 'todas'
    }
  }

  mudaTarefa = (event, novaMarcacao) => {
    this.setState({ tarefas: novaMarcacao })
  }

  render() {

  const mock = ['item1', 'item2']

  return (
    <Wrapper>
      <h1 className='centraliza-texto vermelho enorme'>4Task</h1>

      <Paper className='paper' elevation={3}>

        <Grid container>
          <TextField fullWidth label="O que tem para ser feito?" />
        </Grid>

        <List>
          {mock.map((linha, index) => (
            <ListItem
              key={index}
              // role={undefined} 
              // dense 
              button
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                // checked={checked.indexOf(value) !== -1}
                // tabIndex={-1}
                // disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>

              <ListItemText
                primary={linha}
              >
                {/* {linha} */}
              </ListItemText>

            </ListItem>
          ))}
        </List>

        <Grid container className='rodape'>
          
          <Grid item>
            <Button>Marcar todas como completas</Button>
          </Grid>

          <Grid item>

            <ToggleButtonGroup exclusive value={this.state.tarefas} onChange={this.mudaTarefa} aria-label="tarefas">
              <ToggleButton value="todas" aria-label="todas">
                Todas
            </ToggleButton>
              <ToggleButton value="pendentes" aria-label="pendentes" >
                Pendentes
            </ToggleButton>
              <ToggleButton value="completas" aria-label="completas">
                Completas
            </ToggleButton>
            </ToggleButtonGroup>

            </Grid>

            {/* <Grid item>
            <Button className='botao' variant="outlined" color="primary">Todas</Button>
            <Button className='botao' variant="outlined" color="primary">Pendentes</Button>
            <Button className='botao' variant="outlined" color="primary">Completas</Button>
          </Grid> */}

            {/* <Grid item>
            <List>
              <ListItem><Button 
                className='botao' 
                variant="outlined" 
                color="primary"
              >
                Todas
              </Button></ListItem>
              <ListItem><Button 
                className='botao' 
                variant="outlined" 
                color="primary"
              >
                Pendentes
              </Button></ListItem>
              <ListItem><Button 
                className='botao' 
                variant="outlined" 
                color="primary"
              >
                Completas
              </Button></ListItem>
            </List>
          </Grid> */}

        </Grid>

      </Paper>

    </Wrapper>
  );
}
}

export default App;
