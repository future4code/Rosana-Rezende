import tasksReducer from './tasks'
import { setTasks } from '../actions'

const mockInitialState = {}

describe('Tasks Reducer', () => {

    it('Set Tasks', () => {
        const mockTasks = [{}]
        const mockedAction = setTasks(mockTasks)
        const newStore = tasksReducer(mockInitialState, mockedAction)

        expect(newStore.allTasks).toHaveLength(1)
    })
})