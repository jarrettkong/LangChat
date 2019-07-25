// __tests__/ErrorPage-test.js
import React from 'react';
import { ErrorPage } from '../src/components/ErrorPage/ErrorPage';
import * as actions from '../src/actions/index';
import { shallow } from 'enzyme';

describe('ErrorPage', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<ErrorPage />
		);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
  });
});
