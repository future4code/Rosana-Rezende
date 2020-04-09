import axios from 'axios'

import { baseUrl } from '../utils/constants'

export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    payload: {
        tasks
    }
})

export const getTasks = () => async (dispatch) => {

    try{
        const response = await axios.get(baseUrl)
        // console.log(response.data)
        dispatch(setTasks(response.data))

    } catch(error) {
        console.error(error.message)
        alert('Não foi possível acessar a lista de tarefas')
    }
}

export const createTask = (createTaskData) => async (dispatch) => {
    // console.log(createTaskData)

    try{
        await axios.post(baseUrl, createTaskData)
        dispatch(getTasks())

    } catch(error) {
        console.error(error.message)
        alert('Não foi possível criar a tarefa')
    }

}
