import axios from 'axios'
import { createTask, getTasks, setTasks } from './index'
import { baseUrl } from '../utils/constants'

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
    
    // Mock do dispatch
        // pra que ele funcione aqui, sem quebrar outros testes
    let mockDispatch
    beforeEach(() => {
        mockDispatch = jest.fn()
    });

    it('Get Tasks - should return a list of tasks', async () => {

        // Mock de dados
            // fiz igualzinho o formato, mas funcionaria com qq coisa
        const mockDataTaskCreated = [
            {
                id: "abc",
                day: "Segunda",
                text: "Tarefa de teste"
            }
        ]

        // Mock do axios
        axios.get = jest.fn(() => ({ data: mockDataTaskCreated }))

        // const response = axios.get() // aqui ela é síncrona = responde instantaneamente
        // console.log(response.data)

        // Executa a ação assíncrona
        await getTasks()(mockDispatch)

        // Verifica se o dispatch foi chamado com a ação correta
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "SET_TASKS",
            payload: {
                tasks: mockDataTaskCreated
            }
        })

    })

    it('Create Tasks - should create a task', async () => {

        // Mock de dados
            // mais um vez, fiz igualzinho, mas funcionaria com qq coisa
        const mockDataTaskToCreate = {
            day: "Terça",
            text: "Tarefa de teste 2"
        }

        // Mock do axios
        axios.post = jest.fn()

        // Executa a ação assíncrona
        await createTask(mockDataTaskToCreate)(mockDispatch)

        // Verifica se o dispatch foi chamado
        expect(mockDispatch).toHaveBeenCalled()
        // só uma vez?
        expect(mockDispatch).toHaveBeenCalledTimes(1)
        // o axios.post pegou a url e os dados?
        expect(axios.post).toHaveBeenCalledWith(baseUrl, mockDataTaskToCreate)
    
    })

})
