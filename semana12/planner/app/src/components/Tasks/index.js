import React, { useEffect } from "react";
import { connect } from "react-redux";

import { list } from '../../utils/constants'
import { getTasks } from '../../actions'

import { TasksWrapper, CardStyled, WeekDay } from './styles'
import { CardContent, Typography } from '@material-ui/core'


export const Tasks = (props) => {

  const { getTasks } = props
  useEffect(() => {
    getTasks()
  }, [getTasks])

  return (
    <TasksWrapper>

      {list.map(weekDay => (
        <CardStyled key={weekDay} id={weekDay}>

          <WeekDay>
            <Typography variant='h6' color='primary'>
              {weekDay}
            </Typography>
          </WeekDay>

          <CardContent>
            {props.tasks.filter(task => task.day === weekDay).map(task => (
              <Typography key={task.id} variant='body1' component="p">
                {task.text}
              </Typography>
            ))}
          </CardContent>

        </CardStyled>
      ))}

    </TasksWrapper>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.allTasks
})


const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);