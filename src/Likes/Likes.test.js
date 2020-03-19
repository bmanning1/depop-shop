import React from 'react';
import { shallow } from 'enzyme';
import Likes, { LikeCount, LikesList } from '.';

describe('Likes:', () => {
    let baseComponent;
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
        baseComponent = shallow(
            <Likes likedItems={likedItems} unlikeItem={jest.fn()} />
        );
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    describe('when the like count is clicked', () => {
        test('should show LikesList if there are liked items', () => {
            const component = shallow(
                <Likes likedItems={likedItems} unlikeItem={jest.fn()} />
            );
            component.find('LikeCount').simulate('click');
            expect(baseComponent).toMatchDiffSnapshot(component);
        });

        test('should not show LikesList if there are no liked items', () => {
            const component = shallow(
                <Likes likedItems={[]} unlikeItem={jest.fn()} />
            );
            component.find('LikeCount').simulate('click');
            expect(baseComponent).toMatchDiffSnapshot(component);
        });

        test('should hide LikesList if it is already shown', () => {
            baseComponent.find('LikeCount').simulate('click');
            expect(baseComponent.find('LikesList')).toHaveLength(1);
            baseComponent.find('LikeCount').simulate('click');
            expect(baseComponent.find('LikesList')).toHaveLength(0);
        });
    })
});

describe('LikeCount:', () => {
    let baseComponent, onClick;
    const likes = 2;

    beforeEach(() => {
        onClick = jest.fn();
        baseComponent = shallow(
            <LikeCount likes={likes} onClick={onClick} />
        );
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    test('should disable the button if there are no likes', () => {
        const component = shallow(
            <LikeCount likes={0} onClick={onClick} />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });

    test('should call the onClick function when the button is clicked', () => {
        baseComponent.find('.likes-count').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    test('should display the correct grammer if there is 1 like', () => {
        const component = shallow(
            <LikeCount likes={1} onClick={onClick} />
        );
        expect(baseComponent).toMatchDiffSnapshot(component);
    });
});

describe('LikesList:', () => {
    let baseComponent, unlikeItem;
    const id1 = 1;
    const likedItems = [
        {
            id: id1,
            title: 'jumper'
        },
        {
            id: 2,
            title: 'trainers'
        },
    ];

    beforeEach(() => {
        unlikeItem = jest.fn();
        baseComponent = shallow(
            <LikesList likedItems={likedItems} unlikeItem={unlikeItem} />
        );
    });

    test('should match snapshot', () => {
        expect(baseComponent).toMatchSnapshot();
    });

    test('should unlike the selected item on button click', () => {
        baseComponent.find('li').first().find('button').simulate('click');
        expect(unlikeItem).toHaveBeenCalledWith(id1);
    })
});