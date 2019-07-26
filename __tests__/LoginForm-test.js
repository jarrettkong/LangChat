// __tests__/LoginForm-test.js
import React from 'react';
import { LoginForm, mapDispatchToProps } from '../src/components/LoginForm/LoginForm';
import * as actions from '../src/actions/index';
import { shallow } from 'enzyme';

const mockChangeUserName = jest.fn();
const mockChangePassword = jest.fn();
const mockLogin = jest.fn();
const mockUsername = 'mockUsername';
const mockPassword = 'mockPassword';
const mockSplashPage = jest.fn();
const mockHandleError = jest.fn();

describe('LoginForm', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<LoginForm
				changeUsername={mockChangeUserName}
				changePassword={mockChangePassword}
				login={mockLogin}
				username={mockUsername}
				password={mockPassword}
				splashPage={mockSplashPage}
				handleError={mockHandleError}
			/>
		);
		instance = wrapper.instance();

		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve(1)
			})
		);
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should match init state', () => {
		const initState = {
			loading: false
		};

		expect(wrapper.state()).toEqual(initState);
	});

	it.skip("should invoke 'Actions.splashPage()' when close button is pressed", () => {
		wrapper.find("[data-test='close-btn']").simulate('press');
		expect(mockSplashPage).toHaveBeenCalled();
	});

	describe('handleChange', () => {
		it("should invoke 'handleChange' when user types username with correct params", () => {
			let mockFn = jest.spyOn(instance, 'handleChange');
			wrapper.find("[data-test='username-input']").simulate('ChangeText', 'mockUser');
			expect(mockFn).toHaveBeenCalledWith('mockUser', 'username');
		});

		it("should invoke 'handleChange' when user types password with correct params", () => {
			let mockFn = jest.spyOn(instance, 'handleChange');
			wrapper.find("[data-test='password-input']").simulate('ChangeText', 'mockPassword');
			expect(mockFn).toHaveBeenCalledWith('mockPassword', 'password');
		});

		it("should invoke 'changeUserName' when handleChange is called with correct params", () => {
			instance.handleChange('mockUser', 'username');
			expect(mockChangeUserName).toHaveBeenCalledWith('mockUser');
		});

		it("should invoke 'changePassword' when handleChange is called with correct params", () => {
			instance.handleChange('mockPassword', 'password');
			expect(mockChangePassword).toHaveBeenCalledWith('mockPassword');
		});
	});

	describe('login', () => {
		it('should set the state of loading to true when login is invoked', () => {
			expect(wrapper.state('loading')).toEqual(false);
			instance.login();
			expect(wrapper.state('loading')).toEqual(true);
		});

		it("should invoke 'fetch' with the correct params", () => {
			const mockUrl = 'https://langchat-crosspollination.herokuapp.com/api/v1/log_in/?format=json';
			const mockBody = {
				body: '{"username":"mockUsername","password":"mockPassword"}',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				method: 'POST'
			};
			instance.login();
			expect(fetch).toHaveBeenCalledWith(mockUrl, mockBody);
		});

		it('should throw an error if the response is not ok and save that error to redux store', async () => {
			window.fetch.mockImplementationOnce(() => Promise.reject(new Error()));
			await instance.login();
			expect(mockHandleError).toHaveBeenCalledWith("Your username or password is invalid. Please try again.");
		});

		it("should set the state of 'loading' back to false", async () => {
			wrapper.setState({ loading: true });
			expect(wrapper.state('loading')).toEqual(true);
			await instance.login();
			expect(wrapper.state('loading')).toEqual(false);
		});

		it("should invoke 'login' when login button is pressed", () => {
			const mockFn = jest.spyOn(instance, 'login');
			wrapper.find("[data-test='login-btn']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});
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

	it('should call dispatch for login', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.login('mockUser');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.login('mockUser');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for handleError', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.handleError('mock error message');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.handleError('mock error message');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});
});
