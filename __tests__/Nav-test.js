// __tests__/Nav-test.js
import React from 'react';
import { Nav } from '../src/components/Nav/Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(<Nav />);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
	});
});
