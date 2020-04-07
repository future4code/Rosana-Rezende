import React from "react";
import { shallow } from "enzyme";
import ButtonScrollToTop from './index'
import { ButtonTop } from './styles'
import renderer from "react-test-renderer";

describe("Button Scroll To Top", () => {
    
    it('Scroll Function', () => {

        const mockScrollFunction = jest.fn()

        const component = shallow(
            <ButtonScrollToTop onClikToScroll={mockScrollFunction} />
        )

        const scrollButton = component.find(ButtonTop)
        
        // o botão existe?
        expect(scrollButton).toHaveLength(1)

        // scrollButton.simulate("click");

        // expect(mockScrollFunction).toHaveBeenCalledWith(1);

    })
})