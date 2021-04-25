import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App Component renders', () => {
	let container = shallow(<App />);

	it('should render a dive', () => {
		expect(container.find('div').length).toEqual(1);
	});

	it('should render the Timer Component', () => {
		expect(container.containsMatchingElement(<Timer />)).toEqual(true);
	});
});
