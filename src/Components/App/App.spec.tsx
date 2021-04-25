import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component renders', () => {
	it('should render a dive', () => {
		let container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
	});
});
