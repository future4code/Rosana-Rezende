// https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c
import React from "react";
import { shallow } from "enzyme";
import { CreateTask } from './index'
import { CreateTaskForm } from './styles'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const mockInitialState = {};

describe('Create Task - when the form is submitted', () => {
    let store
    let component
    let mockCreateTask   

    beforeEach(() => {
        mockCreateTask = jest.fn()   
        store = mockStore(mockInitialState);
        component = shallow(<CreateTask store={store} createTask={mockCreateTask} />)
        jest.resetAllMocks()
    });

    it('should call de mock create task function', () => {

        const formCreateTask = component.find(CreateTaskForm)

        // p formulário existe
        expect(formCreateTask).toHaveLength(1)

        formCreateTask.simulate('submit', {preventDefault() {}})

        // ele é chamado uma vez
        expect(mockCreateTask).toBeCalledTimes(1)

    })

    it('should be called whith the text and day in the state as arguments', () => {

        const taskInput = component.find('#task')
        const weekDaySelect = component.find('#weekDay')

        // o input de task existe
        expect(taskInput).toHaveLength(1)
        expect(weekDaySelect).toHaveLength(1)

        //faço as simulações
        taskInput.simulate('change', {
            target: {
                name: 'text',
                value: 'Tarefa teste'
            }
        })

        weekDaySelect.simulate('change', {
            target: {
                name: 'day',
                value: 'Segunda'
            }
        })

        component.find(CreateTaskForm).simulate('submit', {preventDefault() {}})

        // o resultado é o que eu espero?
            // console.log(mockCreateTask.mock.calls)
        expect(mockCreateTask).toHaveBeenCalledWith({
            text: 'Tarefa teste',
            day: 'Segunda'
        })

    })

})