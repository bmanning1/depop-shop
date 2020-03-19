import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import axios from 'axios';
import Shop from '.';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('Shop:', () => {
	let component;
	const mockResponse = [
		{
			id: 1,
			img: 'http://www.imgUrl.com',
			title: 'Jumper',
			price: 35.5,
			seller: '@user',
			size: 'L',
			sold: false
		},
		{
			id: 2,
			img: 'http://www.imgUrl.com',
			title: 'Jumper',
			price: 35.5,
			seller: '@user',
			brand: 'Supreme',
			sold: false
		}
	];

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Shop />, div);
	});

	test('should match snapshot', async() => {
		axios.get.mockResolvedValue({ data: mockResponse });
		await act(async () => {
			component = await mount(<Shop />);
		});
		component.update();
		expect(component).toMatchSnapshot();
	});

	test('should alert the user to refresh the page when there is an error fetching data', async() => {
		jest.spyOn(window, 'alert').mockImplementation(() => {});
		axios.get.mockImplementation(() => Promise.reject());
		await act(async () => {
			component = await mount(<Shop />);
		});
		expect(window.alert).toHaveBeenCalledWith(
			'There was an error fetching the data. Please refresh the page.'
		);
	});
});
