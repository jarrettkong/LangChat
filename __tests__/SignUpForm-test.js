// __tests__/SignUpForm-test.js
import React from 'react';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from '../src/components/SignUpForm/SignUpForm';
import * as actions from '../src/actions/index';

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

// describe('mapStateToProps', () => {
// 	it('should return an object', () => {
// 		const mockData = {
// 			email: '',
// 			password: '',
// 			firstName: '',
// 			lastName: '',
// 			userName: '',
// 			country: ''
// 		};
// 		const expected = {
// 			email: '',
// 			password: '',
// 			firstName: '',
// 			lastName: '',
// 			userName: '',
// 			country: ''
// 		};

// 		const mockprops = mapStateToProps(mockData);
// 		expect(mockprops).toEqual(expected);
// 	});
// });

describe('mapDispatchToProps', () => {
	it('should call dispatch for createFirstName', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createFirstName('mockFirstName');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createFirstName('mockFirstName');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for createLastName', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createLastName('mockLastName');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createLastName('mockLastName');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for createEmail', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createEmail('mockEmail');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createEmail('mockEmail');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for createPassword', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createPassword('mockPassword');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createPassword('mockPassword');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for createUserName', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createUserName('mockUserName');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createUserName('mockUserName');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for createCountry', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.createCountry('mockCountry');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.createCountry('mockCountry');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});
});
