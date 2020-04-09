// https://github.com/enzymejs/enzyme/issues/2086
import React from "react";
import { mount } from "enzyme";
import { Tasks } from './index'

describe('List Tasks - when obtained task list', () => {
    let component
    const mockTasks = []
    const mockGetTasks = jest.fn()

    beforeEach(() => {

        jest.spyOn(React, "useEffect").mockImplementation(f => f());

        component = mount(
            <Tasks
                tasks={mockTasks}
                getTasks={mockGetTasks}
            />)
    });

    it('should call de mock get Task function', () => {
        expect(mockGetTasks).toHaveBeenCalled()
    });

})
