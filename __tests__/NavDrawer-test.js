// __tests__/NavDrawer-test.js
import React from 'react';
import { NavDrawer, mapStateToProps, mapDispatchToProps } from '../src/components/NavDrawer/NavDrawer';
import * as actions from '../src/actions/index';
import { shallow } from 'enzyme';
import Drawer from 'react-native-drawer';

const mockDrawer = Drawer;
const mockLogout = jest.fn();
const mockHandleError = jest.fn();

describe('NavDrawer', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(<NavDrawer logout={mockLogout} drawer={mockDrawer} handleError={mockHandleError}/>);
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
			drawerOpen: false
		};

		expect(wrapper.state()).toEqual(initState);
	});

	describe('toggleDrawer', () => {
		it("should set the state of 'drawerOpen' to true", () => {
			expect(wrapper.state('drawerOpen')).toEqual(false);
			instance.toggleDrawer();
			expect(wrapper.state('drawerOpen')).toEqual(true);
		});
	});

	describe('openDrawer', () => {
		it.skip("should invoke 'openDrawer' when user clicked the open drawer button", () => {
			const mockFn = jest.spyOn(instance, 'openDrawer');
			expect(wrapper.state('drawerOpen')).toEqual(false);
			wrapper.find("[data-test='open-drawer-btn']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe('logout', () => {
		it("should invoke 'fetch' with the correct params", () => {
			const mockUrl = 'https://langchat-crosspollination.herokuapp.com/api/v1/log_out/';
			const mockBody = {
				body: '{}',
				headers: { Authorization: 'Token undefined', 'Content-Type': 'application/json', 'X-CSRFToken': undefined },
				method: 'POST'
			};
			instance.logout();
			expect(fetch).toHaveBeenCalledWith(mockUrl, mockBody);
		});

		it("should invoke 'logout'", async () => {
			await instance.logout();
			expect(mockLogout).toHaveBeenCalled();
		});

		it('should throw an error if the response is not ok and save that error to redux store', async () => {
			window.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.logout();
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
		});
	});
});

describe('mapDispatchToProps', () => {
	it('should call dispatch for logout', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.logout();
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.logout();
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