import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('Header:', () => {
    let component; 
    const likedItems = [
        {
            id: 1,
            title: 'jumper'
        },
        {
            id: 2,
            title: 'trainers'
        },
    ];

    beforeEach(() => {
        component = shallow(
            <Header likedItems={likedItems} unlikeItem={jest.fn()} />
        );
    });

    test('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});