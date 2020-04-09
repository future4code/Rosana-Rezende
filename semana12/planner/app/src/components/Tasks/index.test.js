import React from "react";
import { shallow } from "enzyme";
import { Tasks } from './index'
import { } from './styles'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const initialState = {};

const mockTasks = []

describe('List Tasks - when obtained task list', () => {
    let store
    let component
    let useEffect;

    const mockGetTasks = jest.fn()     

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(<Tasks store={store}
        getTasks={mockGetTasks} 
        tasks={mockTasks}
        />)
    });

    /* mocking useEffect */
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect(); // 2 times
    mockUseEffect(); //

    it('should call de mock get Task function', () => {
        const actions = store.getActions();

        // não sei prosseguir

        // expect(actions).toEqual([{ type: "GET_TASKS" }]);
    });

})
