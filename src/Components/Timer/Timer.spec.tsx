import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('App Component renders', () => {
	let container = shallow(<Timer />);

	it('should render a dive', () => {
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
	});

	it('should render instances of the TimerButton component', () => {
		expect(container.find('TimerButton').length).toEqual(3);
	});
});
