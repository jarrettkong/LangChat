import React from 'react';
import Router from '../src/Router';
import { shallow } from 'enzyme';

describe('Router', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Router />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
