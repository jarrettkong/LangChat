// __tests__/Spinner-test.js
import React from 'react';
import { Spinner, mapStateToProps, mapDispatchToProps } from '../src/components/common/Spinner';
import * as actions from '../src/actions/index';
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
