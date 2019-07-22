// __tests__/SignUpForm-test.js
import React from 'react';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from '../src/components/SignUpForm/SignUpForm';

import renderer from 'react-test-renderer';

describe('SignUpForm Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<SignUpForm />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should have default state', () => {
		const wrapper = renderer.create(<SignUpForm />).getInstance();

		expect(wrapper.state).toEqual({
			userInfo: true,
			userCountry: false,
			userCredentials: false,
			confirmation: '',
			error: ''
		});
	});
});
