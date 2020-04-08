import React, { useState } from "react";
import { connect } from "react-redux";

import { list } from '../../utils/constants'
import { createTask } from '../../actions'

import { CreateTaskWrapper, CreateTaskForm } from './styles'
import { TextField, Button } from '@material-ui/core'

const CreateTask = (props) => {

  const [task, setTask] = useState('')
  const [weekDay, setWeekDay] = useState('')

  const onCreateTask = (e) => {
    e.preventDefault()
    setTask('')
    setWeekDay('')
    const createTaskData = {
      text: task,
      day: weekDay
    }
    props.createTask(createTaskData)
  }

  return (
    <CreateTaskWrapper>

      <CreateTaskForm onSubmit={onCreateTask}>

        <TextField
          variant='outlined'
          margin="normal"
          label="Escrever tarefa..."
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
          inputProps={{
            pattern: '.{3,}',
            title: 'A tarefa deve ter no mínimo 3 caractéres'
          }}
        />

        <TextField
          select
          variant='outlined'
          label="Selecionar dia"
          required
          SelectProps={{
            native: true,
            required: true
          }}
          value={weekDay}
          onChange={(e) => setWeekDay(e.target.value)}
        >
          <option value='' hidden></option>
          {list.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </TextField>

        <Button type="submit" variant="contained" color="primary">
          Criar tarefa
        </Button>

      </CreateTaskForm>


    </CreateTaskWrapper>
  );
}
const mapDispatchToProps = dispatch => ({
  createTask: (createTaskData) => dispatch(createTask(createTaskData))
})

export default connect(null, mapDispatchToProps)(CreateTask);