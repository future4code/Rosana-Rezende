import React from 'react'
import { shallow } from "enzyme";
import renderer from 'react-test-renderer'
import { Appbar } from './index'

describe('Appbar', () => {

    let component
    let appBar
    beforeEach(() => {
        component = shallow(<Appbar />)
        appBar = component.find('#appbar')
    });


    it('the component Appbar exists', () => {
        expect(appBar).toHaveLength(1)
    })

    // Não faço ideia se isso é assim, nem pq usar skip
    it.skip('renders correctly', () => {
        const tree = renderer
            .create(appBar)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})