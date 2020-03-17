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
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Wrapper = styled.div`
  max-width: 80vh;
  margin: auto;
`

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tarefas: 'todas',
      // novaTarefa: '',
      todasAsTarefas: [],
      text: this.props.text || ''
    }
  }

  mudaTarefa = (event, novaMarcacao) => {
    this.setState({ tarefas: novaMarcacao })
  }

  escreveTarefa = (event) => {
    this.setState({
      // novaTarefa: event.target.value,
      text: event.target.value
    })
  }

  adicionaTarefa = (event) => {
    // const text = event.target.value.trim()
    

    if (event.key === 'Enter') {
      const copiaTodasAsTarefas = [...this.state.todasAsTarefas]
      const essaNovaTarefa = {
        id: new Date(),
        name: event.target.value,
        completa: false
      }
      copiaTodasAsTarefas.push(essaNovaTarefa)
      this.setState({ 
        todasAsTarefas: copiaTodasAsTarefas,
        // novaTarefa: ''
      })

      
      // this.props.onSave(text)
      // if (this.props.newTodo) {
        this.setState({ text: '' })
      // }
    }
  }

  marcarCompletaPendente = (id) => {
    // this.setState({ todasAsTarefas[tarefa].completa: false })

    // return state.map(todo =>
    // todo.id === action.id ?
    // { ...todo, completed: !todo.completed } :
    // todo)
    const tarefaCompleta = this.state.todasAsTarefas.map(tarefa => (
      tarefa.id === id ? {...tarefa, completa: !tarefa.completa} : {tarefa}
    ))
    return tarefaCompleta
    
  }

  render() {

  console.log(this.state.todasAsTarefas)

  let listaDeTarefas
  if(this.state.todasAsTarefas.length > 0) {
    listaDeTarefas = this.state.todasAsTarefas.map(tarefa => (
      <ListItem key={tarefa.id} button 
        // role={undefined} 
        // dense 
      >
        <ListItemIcon>
          <Checkbox  edge="start"
            checked={tarefa.completa}
            onChange={() => this.marcarCompletaPendente(tarefa.id)}


            // defaultChecked={tarefa.completa} 
          
            // onClick={() => this.marcarCompletaPendente(tarefa)}
          // checked={checked.indexOf(value) !== -1}
          // tabIndex={-1}
          // disableRipple
          // inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText primary={tarefa.name}></ListItemText>

        <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>

      </ListItem>
    ))
  }

  return (
    <Wrapper>
      <h1 className='centraliza-texto vermelho enorme'>4Task</h1>

      <Paper className='paper' elevation={3}>

        <Grid container>
          <TextField 
            fullWidth 
            label="O que tem para ser feito?" 
            // value={this.state.novaTarefa}
            value={this.state.text}
            onChange={this.escreveTarefa}
            onKeyPress={this.adicionaTarefa}
          />
        </Grid>

        <List>
          {listaDeTarefas}
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
