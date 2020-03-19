import React from 'react';
import { shallow } from 'enzyme';
import Item from '.';

describe('Item:', () => {
    let baseComponent; 
    const props = {
        id: 1,
        img: 'http://www.imgUrl.com',
        title: 'Jumper',
        price: 35.50,
        seller: '@user',
        sold: false,
        liked: false,
        toggleLike: jest.fn()
    };

    beforeEach(() => {
        baseComponent = shallow(<Item {...props} />);
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    test('should display sold over the image if the item is sold', () => {
        const newProps = { ...props, sold: true };
        const component = shallow(<Item {...newProps} />);
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should add liked styling on the heart icon if the item is liked', () => {
        const newProps = { ...props, liked: true };
        const component = shallow(<Item {...newProps} />);
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should display size and brand if they are given', () => {
        const newProps = { ...props, size: 'L', brand: 'Supreme' };
        const component = shallow(<Item {...newProps} />);
        expect(baseComponent).toMatchDiffSnapshot(component);
    });
});