import { createTask, getTasks, setTasks } from './index'
import axios from 'axios'

describe('Tasks - Action Creators', () => {
    it('Set Tasks', () => {
        const mockTasks = "test"
        const mockedAction = setTasks(mockTasks)

        expect(mockedAction.type).toEqual("SET_TASKS")
        expect(mockedAction.payload.tasks).toBeDefined()
        expect(mockedAction.payload.tasks).toEqual(mockTasks)
    })
})

describe('Tasks - Async actions', () => {

    it('Get Tasks - should return a list of tasks', async () => {

        // Mock do axios
        axios.get = jest.fn(() => {
            return {
                data: [
                    {
                        id: "abc",
                        day: "Segunda",
                        text: "Tarefa de teste"
                    }
                ]
            }
        })

        // const response = axios.get() // aqui ela é síncrona = responde instantaneamente
        // console.log(response.data)

        // Mock do dispatch
        const dispatch = jest.fn()

        // Executa a ação assíncrona
        await getTasks()(dispatch)

        // Verifica se o dispatch foi chamado com a ação correta
        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_TASKS",
            payload: {
                tasks: [{
                    id: "abc",
                    day: "Segunda",
                    text: "Tarefa de teste"
                }]
            }
        })

    })

    it('Create Tasks - should create a task', async () => {

        // Mock do axios
        axios.post = jest.fn()  

        // Mock do dispatch
        const dispatch = jest.fn()

        const mockCreateTaskData = {
            day: "Terça",
            text: "Tarefa de teste 2"
        }

        // Executa a ação assíncrona
        await createTask(mockCreateTaskData)(dispatch)

        // Verifica se o dispatch foi chamado com a ação correta
        // expect(dispatch).toHaveBeenCalledWith(

        // )


    })
})