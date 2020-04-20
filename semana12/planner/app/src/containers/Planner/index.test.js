import React from 'react'
import { shallow } from "enzyme";
import { Planner } from './index'

describe('App', () => {

    let component
    let appbar
    let createtask
    let tasks

    beforeEach(() => {
        component = shallow(<Planner />)
        appbar = component.find('#appbar')
        createtask = component.find('#createtask')
        tasks = component.find('#tasks')
    });

    it('the component Appbar exists', () => {
        expect(appbar).toHaveLength(1)
    })

    it('the component CreateTask exists', () => {
        expect(createtask).toHaveLength(1)
    })

    it('the component Tasks exists', () => {
        expect(tasks).toHaveLength(1)
    })

})