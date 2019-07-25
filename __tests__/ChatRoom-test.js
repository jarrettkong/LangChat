// __tests__/ChatRoom-test.js
import React from 'react';
import { ChatRoom, mapStateToProps, mapDispatchToProps } from '../src/components/ChatRoom/ChatRoom';
import * as actions from '../src/actions/index';
import { shallow } from 'enzyme';

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

const mockMessages = [ 'This is a mock message', 'This is another mock message' ];
const mockRoomId = 1;
const mockLanguageId = 1;
const mockAddExistingMessages = jest.fn();
const mockHandleError = jest.fn();

describe('ChatRoom', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<ChatRoom
				messages={mockMessages}
				roomId={mockRoomId}
				addExistingMessages={mockAddExistingMessages}
				handleError={mockHandleError}
				languageId={mockLanguageId}
			/>
		);
		instance = wrapper.instance();
		wrapper.setState({
			message: '',
			loading: false,
			referencedMessage: null
		});

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
			message: '',
			loading: false,
			referencedMessage: null
		};

		expect(wrapper.state()).toEqual(initState);
	});

	it("should set the state of 'message' as user types in message field", () => {
		expect(wrapper.state('message')).toEqual('');
		wrapper.find("[data-test='message-input']").simulate('ChangeText', 'This is a mock message');
		expect(wrapper.state('message')).toEqual('This is a mock message');
	});

	describe('ComponentDidMount', () => {
		it('should set the state of loading to true', () => {
			expect(wrapper.state('loading')).toEqual(false);
			instance.componentDidMount();
			expect(wrapper.state('loading')).toEqual(true);
		});

		it("should invoke 'connect'", () => {
			const mockFn = jest.spyOn(instance, 'connect');
			instance.componentDidMount();
			expect(mockFn).toHaveBeenCalled();
		});

		it("should invoke 'fetchMessages'", async () => {
			const mockFn = jest.spyOn(instance, 'fetchMessages');
			await instance.componentDidMount();
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe('fetchMessages', () => {
		it("should invoke 'fetch' with the correct params", () => {
			instance.fetchMessages();
			expect(fetch).toHaveBeenCalledWith(`https://langchat-crosspollination.herokuapp.com/api/v1/rooms/1/messages`);
		});

		it("should invoke 'addExistingMessages' after the fetch has finished", async () => {
			await instance.fetchMessages();
			expect(mockAddExistingMessages).toHaveBeenCalledWith(1);
		});

		it('should throw an error if the response is not ok and save that error to redux store', async () => {
			window.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.fetchMessages();
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
		});
	});

	describe('sendMessage', () => {
		it("should invoke 'sendMessage' when user hits the send message button", () => {
			const mockFn = jest.spyOn(instance, 'sendMessage');
			wrapper.setState({ message: 'mock message' });
			wrapper.find("[data-test='send-message-btn']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe('clearReferencedMessage', () => {
		it("should invoke 'clearReferencedMessage' when user hits close edit btn", () => {
			const mockFn = jest.spyOn(instance, 'clearReferencedMessage');
			wrapper.setState({ referencedMessage: 'This a mock message' });
			wrapper.find("[data-test='close-edit-message']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});

		it('should set the state of referencedMessage to null and message to an empty string', () => {
			wrapper.setState({ referencedMessage: 'Mock referenced message', message: 'Mock message' });
			instance.clearReferencedMessage();
			expect(wrapper.state('referencedMessage')).toEqual(null);
			expect(wrapper.state('message')).toEqual('');
		});
	});

	describe('setReferencedMessage', () => {
		it('should set the state of referencedMessage and message', () => {
			expect(wrapper.state('referencedMessage')).toEqual(null);
			expect(wrapper.state('message')).toEqual('');
			instance.setReferencedMessage(1, 'Mock message');
			expect(wrapper.state('referencedMessage')).toEqual(1);
			expect(wrapper.state('message')).toEqual('Mock message');
		});
	});
});

describe('mapStateToProps', () => {
	it('should return an object', () => {
		const mockData = {
			messages: '',
			user: '',
			token: ''
		};
		const expected = {
			messages: '',
			user: '',
			token: ''
		};

		const mockProps = mapStateToProps(mockData);
		expect(mockProps).toEqual(expected);
	});
});

describe('mapDispatchToProps', () => {
	it('should call dispatch for addMessage', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.addMessage('mock message');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.addMessage('mock message');
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for addExistingMessages', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.addExistingMessages('mock message');
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.addExistingMessages('mock message');
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
