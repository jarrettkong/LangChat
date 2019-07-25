// __tests__/SignUpForm-test.js
import React from 'react';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from '../src/components/SignUpForm/SignUpForm';
import * as actions from '../src/actions/index';
import { shallow } from 'enzyme';

const mockCreateFirstName = jest.fn();
const mockCreateLastName = jest.fn();
const mockCreateUserName = jest.fn();
const mockCreateCountry = jest.fn();
const mockCreateEmail = jest.fn();
const mockCreatePassword = jest.fn();
const mockHandleError = jest.fn();

const mockUser = {
	country_of_origin: 'United States',
	email: 'Mkaplan@mail.com',
	first_name: 'Matthew',
	id: 10,
	is_active: true,
	last_name: 'Kaplan',
	password: 'pbkdf2_sha256$150000$AdrUegMOrPIc$MFeO3KKmLLesav6R9k4Zu5kmSXh70LdNY8RMf26CzH8=',
	token: 'e85595630776825bdf128ae87da88432bc02e9c3',
	username: 'Mkaplan'
};

describe('SignUpForm', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<SignUpForm
				createFirstName={mockCreateFirstName}
				createLastName={mockCreateLastName}
				createUserName={mockCreateUserName}
				createCountry={mockCreateCountry}
				createEmail={mockCreateEmail}
				createPassword={mockCreatePassword}
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
			userInfo: true,
			userCountry: false,
			userCredentials: false,
			confirmation: '',
			error: ''
		};

		expect(wrapper.state()).toEqual(initState);
	});

	describe('User info input page', () => {
		it("should invoke 'createFirstName' with correct param when user types in first name", () => {
			wrapper.find("[data-test='first-name-input']").simulate('ChangeText', 'Matthew');
			expect(mockCreateFirstName).toHaveBeenCalledWith('Matthew');
		});

		it("should invoke 'createLastName' with correct param when user types in last name", () => {
			wrapper.find("[data-test='last-name-input']").simulate('ChangeText', 'Kaplan');
			expect(mockCreateLastName).toHaveBeenCalledWith('Kaplan');
		});

		it("should invoke 'createUserName' with correct param when user types in desired username", () => {
			wrapper.find("[data-test='username-input']").simulate('ChangeText', 'mkaplan');
			expect(mockCreateUserName).toHaveBeenCalledWith('mkaplan');
		});

		it("should change the state of 'userInfo' and 'userCountry' when user info btn is pressed", () => {
			wrapper = shallow(<SignUpForm firstName={'Matthew'} lastName={'Kaplan'} userName={'mkaplan'} />);
			expect(wrapper.state('userInfo')).toEqual(true);
			expect(wrapper.state('userCountry')).toEqual(false);
			instance = wrapper.instance();
			wrapper.find("[data-test='user-info-btn']").simulate('press');
			expect(wrapper.state('userInfo')).toEqual(false);
			expect(wrapper.state('userCountry')).toEqual(true);
		});
	});

	describe('User country page', () => {
		it("should invoke 'createCountry' with the correct param when user chooses country", () => {
			wrapper.setState({ userInfo: false, userCountry: true });
			wrapper.find("[data-test='country-picker']").simulate('ValueChange', 'Iceland');
			expect(mockCreateCountry).toHaveBeenCalled();
		});

		it("should change the state of 'userCountry' and 'userCredentials' when user country btn is pressed", () => {
			wrapper.setState({ userInfo: false, userCountry: true });
			expect(wrapper.state('userCredentials')).toEqual(false);
			expect(wrapper.state('userCountry')).toEqual(true);
			wrapper.find("[data-test='next-btn']").simulate('press');
			expect(wrapper.state('userCredentials')).toEqual(true);
			expect(wrapper.state('userCountry')).toEqual(false);
		});
	});

	describe('User Email and password inputs', () => {
		beforeEach(() => {
			wrapper.setState({ userInfo: false, userCredentials: true });
		});

		it("should invoke 'createEmail' with correct param when user types in their email address", () => {
			wrapper.find("[data-test='email-input']").simulate('ChangeText', 'mkaplan@mail.com');
			expect(mockCreateEmail).toHaveBeenCalledWith('mkaplan@mail.com');
		});

		it("should invoke 'createPassword' with correct param when user types in their desired password", () => {
			wrapper.find("[data-test='password-input']").simulate('ChangeText', 'mockPassword');
			expect(mockCreatePassword).toHaveBeenCalledWith('mockPassword');
		});

		it("should set the state of 'confirmation' when user confirms password", () => {
			expect(wrapper.state('confirmation')).toEqual('');
			wrapper.find("[data-test='confirm-password-input']").simulate('ChangeText', 'mockPassword');
			expect(wrapper.state('confirmation')).toEqual('mockPassword');
		});

		it("should invoke 'register' when user submits their email and desired password", () => {
			const mockFn = jest.spyOn(instance, 'register');
			wrapper.setState({ confirmation: 'mockPassword' });
			wrapper.find("[data-test='email-password-submit-btn']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe('login', () => {
		it("should invoke 'fetch' with correct params", () => {
			const mockUrl = 'https://langchat-crosspollination.herokuapp.com/api/v1/log_in/?format=json';
			const mockBody = {
				body: '{"username":"Mkaplan"}',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				method: 'POST'
			};
			instance.login(mockUser);
			expect(fetch).toHaveBeenCalledWith(mockUrl, mockBody);
		});

		it('should throw an error if the response is not ok and save that error to redux store', async () => {
			window.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.login(mockUser);
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
		});
	});

	describe('register', () => {
		it("should invoke 'fetch' with correct params", () => {
			const mockUrl = 'https://langchat-crosspollination.herokuapp.com/api/v1/users/';
			const mockBody = { body: '{"active":true}', headers: { 'Content-Type': 'application/json' }, method: 'POST' };
			instance.register();
			expect(fetch).toHaveBeenCalledWith(mockUrl, mockBody);
		});

		it("should invoke 'login' after it has finished fetching", async () => {
			const mockFn = jest.spyOn(instance, 'login');
			await instance.register();
			expect(mockFn).toHaveBeenCalledWith(1);
		});

		it('should throw an error if the response is not ok and save that error to redux store', async () => {
			window.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.register();
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
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
