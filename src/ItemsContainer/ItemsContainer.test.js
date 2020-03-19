import React from 'react';
import { shallow } from 'enzyme';
import ItemsContainer, { FilterButton } from '.';

describe('ItemsContainer:', () => {
    let baseComponent; 
    const items = [
        {
            id: 1,
            img: 'http://www.img1Url.com',
            title: 'Jumper',
            price: 35.50,
            brand: 'Supreme',
            size: 'L',
            seller: '@user1',
            sold: false,
            liked: true
        },
        {
            id: 2,
            img: 'http://www.img2Url.com',
            title: 'Trainers',
            price: 25,
            brand: 'Converse',
            seller: '@user2',
            sold: true,
            liked: false
        },
        {
            id: 3,
            img: 'http://www.img3Url.com',
            title: 'Skirt',
            price: 10,
            size: 'M',
            seller: '@user3',
            sold: false,
            liked: false
        },
    ];

    beforeEach(() => {
        baseComponent = shallow(
            <ItemsContainer items={items} loading={false} toggleLike={jest.fn()} />
        );
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    test('should show the Loading component and 0 results if loading', () => {
        const component = shallow(
            <ItemsContainer items={items} loading={true} toggleLike={jest.fn()} />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should handle no items', () => {
        const component = shallow(
            <ItemsContainer items={[]} loading={false} toggleLike={jest.fn()} />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should display the correct grammer if there is 1 item', () => {
        const component = shallow(
            <ItemsContainer items={[items[0]]} loading={false} toggleLike={jest.fn()} />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test.each([ ['liked'], ['sold'] ])
        ('should filter by %p items when the respective filter button is clicked', (filter) => {
            const component = shallow(
                <ItemsContainer items={items} loading={false} toggleLike={jest.fn()} />
            );
            component.find(`FilterButton[filter="${filter}"]`).dive().find('button').simulate('click');
            expect(baseComponent).toMatchDiffSnapshot(component);
        }
    );

    test('should handle multiple filters', () => {
            const component = shallow(
                <ItemsContainer items={items} loading={false} toggleLike={jest.fn()} />
            );
            component.find(`FilterButton[filter="sold"]`).dive().find('button').simulate('click');
            component.find('FilterButton[filter="liked"]').dive().find('button').simulate('click');
            expect(baseComponent).toMatchDiffSnapshot(component);
        }
    );
});

describe('FilterButton:', () => {
    let baseComponent, toggleFilter;
    const filter = 'sold'; 

    beforeEach(() => {
        toggleFilter = jest.fn();
        baseComponent = shallow(
            <FilterButton filters={[]} filter={filter} toggleFilter={toggleFilter} label="Hide Sold Items" />
        );
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    test('should add active styling if the filter is on', () => {
        const component = shallow(
            <FilterButton filters={[filter]} filter={filter} toggleFilter={toggleFilter} label="Hide Sold Items" />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should call toggleFilter with the given filter on click', () => {
        baseComponent.simulate('click');
        expect(toggleFilter).toHaveBeenCalledWith(filter);
    });
});
