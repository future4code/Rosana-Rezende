import React from "react";
import { shallow } from "enzyme";
import ButtonScrollToTop from './index'
import { ButtonTop } from './styles'
import renderer from "react-test-renderer";


describe("Button Scroll To Top", () => {
    
    it('Scroll Function', () => {  
        window.scroll = jest.fn()

        const component = shallow(<ButtonScrollToTop />)

        const scrollButton = component.find(ButtonTop)
        
        // o botão existe?
        expect(scrollButton).toHaveLength(1)

        scrollButton.simulate("click");

        // ele está indo até o topo da página?
        expect(window.scroll).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    })
})