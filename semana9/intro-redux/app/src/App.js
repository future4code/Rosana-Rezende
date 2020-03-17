import React from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';

import styled from 'styled-components'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  addTask,
  removeTask,
  editTask,
  markTaskAsComplete,
  markAllTasksAsComplete,
  removeCompleteTasks
} from './actions'

const Wrapper = styled.div`
  max-width: 80vh;
  margin: auto;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tarefas: 'todas',

      // ---------------------- JEITO NOVO
      inputText: '',
      editingId: '',
      editInput: '',
      inputHere: false
    }
  }

  mudaTarefa = (event, novaMarcacao) => {
    this.setState({ tarefas: novaMarcacao })
  }


  // ---------------------- JEITO NOVO
  inputChange = (event) => {
    this.setState({ inputText: event.target.value })
  }

  enterAddTask = (event) => {
    if (event.key === 'Enter') {
      this.props.onAddTask(this.state.inputText)
      this.setState({ inputText: '' })
    }
  }

  openEditTask = (id, text) => {
    this.setState({
      editingId: id,
      editInput: text,
      inputHere: true
    })
  }

  inputEditChange = (event) => {
    this.setState({ editInput: event.target.value })
  }

  disappearsInput = (id, input) => {
    this.props.onEditTask(id, input)
    this.setState({ inputHere: false })
  }

  render() {

    const {
      tasks,
      onDelete,
      onMarkTaskAsComplete,
      
      onMarkAllTasksAsComplete,
      onRemoveCompleteTasks
    } = this.props

    console.log(tasks)

    const listaDeTarefas = tasks.map(task => (
      <ListItem key={task.id} button>

        <ListItemIcon>
          <Checkbox edge="start" onChange={() => onMarkTaskAsComplete(task.id)} />
        </ListItemIcon>

        {this.state.editingId === task.id && this.state.inputHere 
        ? (
          <>
            <TextField id="standard-basic" label="Editar"
              value={this.state.editInput}
              onChange={this.inputEditChange}
            >
            </TextField>
            <ListItemIcon>
              <Button color='primary' onClick={() => this.disappearsInput(task.id, this.state.editInput)}>SALVAR</Button>
            </ListItemIcon>
          </>
        ) : (
            <ListItemText primary={task.text}
              onClick={() => this.openEditTask(task.id, task.text)}
            >
            </ListItemText>
          )
        }



        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>

      </ListItem>
    ))

    return (
      <Wrapper>
        <h1 className='centraliza-texto vermelho enorme'>4Task</h1>

        <Paper className='paper' elevation={3}>

          <Grid container className='topo'>
            <TextField
              fullWidth
              label="O que tem para ser feito?"
              value={this.state.inputText}
              onChange={this.inputChange}
              onKeyDown={this.enterAddTask}
            />
          </Grid>

          <List>
            {listaDeTarefas}
          </List>

          <Grid container className='rodape'>
            <Grid item>
              <Button onClick={() => onMarkAllTasksAsComplete()}>Marcar todas como completas</Button>
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
            <Grid item>
              <Button onClick={() => onRemoveCompleteTasks()}>Remover todas as completas</Button>
            </Grid>
          </Grid>

        </Paper>

      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ addTask }, dispatch);

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: text => dispatch(addTask(text)),
    onDelete: id => dispatch(removeTask(id)),
    onEditTask: (id, text) => dispatch(editTask(id, text)),
    onMarkTaskAsComplete: id => dispatch(markTaskAsComplete(id)),

    // onMarkAllTasksAsComplete: dispatch(markAllTasksAsComplete()),
    // onRemoveCompleteTasks: dispatch(removeCompleteTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
