import { createTask, getTasks, setTasks} from './index'

describe('Task Action Creators', () => {
    it('Set Tasks', () => {
        const mockTasks = "test"
        const mockedAction = setTasks(mockTasks)

        expect(mockedAction.type).toEqual("SET_TASKS")
        expect(mockedAction.payload.tasks).toBeDefined()
        expect(mockedAction.payload.tasks).toEqual(mockTasks)
    })
})