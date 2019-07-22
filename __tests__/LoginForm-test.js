// __tests__/LoginForm-test.js
import React from 'react';
import { LoginForm, mapStateToProps, mapDispatchToProps } from '../src/components/LoginForm/LoginForm';
import * as actions from '../src/actions/index';

import renderer from 'react-test-renderer';

describe('LoginForm Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<LoginForm />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('mapDispatchToProps', () => {
	it('should call dispatch for changeUsername', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.changeUsername('mockFirstName');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.changeUsername('mockFirstName');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for changePassword', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.changePassword('mockLastName');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.changePassword('mockLastName');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});
});