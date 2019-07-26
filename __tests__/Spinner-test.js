// __tests__/Spinner-test.js
import React from 'react';
import { Spinner } from '../src/components/common/Spinner';
import { shallow } from 'enzyme';

describe('Spinner', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<Spinner />
		);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
  });
});
