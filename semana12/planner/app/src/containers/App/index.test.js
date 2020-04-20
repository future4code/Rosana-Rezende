import React from 'react'
import { shallow } from "enzyme";
import { App } from './index'

describe('App', () => {

    let component
    let planner
    beforeEach(() => {
        component = shallow(<App />)
        planner = component.find('#planner')
    });


    it('the component Planner exists', () => {
        expect(planner).toHaveLength(1)
    })

})