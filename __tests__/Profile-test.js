// __tests__/Profile-test.js
import React from 'react';
import { Profile, mapStateToProps, mapDispatchToProps } from '../src/components/Profile/Profile';
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

describe('Profile', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(<Profile user={mockUser} />);
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
			active: true,
			editing: false
		};

		expect(wrapper.state()).toEqual(initState);
	});

	describe('handlePress', () => {
		it("should change the state of 'editing' when invoked", () => {
			expect(wrapper.state('editing')).toEqual(false);
			instance.handlePress();
			expect(wrapper.state('editing')).toEqual(true);
		});
	});

	describe('handleActivityPress', () => {
		it("should change the state of 'active' when invoked", () => {
			expect(wrapper.state('active')).toEqual(true);
			instance.handleActivityPress();
			expect(wrapper.state('active')).toEqual(false);
		});

		it.skip("should invoke 'handleActivityPress' when the user changes the active btn", () => {
			const mockFn = jest.spyOn(instance, 'handleActivityPress');
			wrapper.find("[data-test='active-btn']").simulate('ValueChange', false);
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe('logout', () => {
		it("should invoke 'fetch' with correct params", () => {
			const mockUrl = 'https://langchat-crosspollination.herokuapp.com/api/v1/log_out/';
			const mockBody = {
				body: '{}',
				headers: { Authorization: 'Token undefined', 'Content-Type': 'application/json', 'X-CSRFToken': undefined },
				method: 'POST'
			};
			instance.logout();
			expect(fetch).toHaveBeenCalledWith(mockUrl, mockBody);
		});

		it("should invoke 'logout' when the user presses the logout btn", () => {
			const mockFn = jest.spyOn(instance, 'logout');
			wrapper.find("[data-test='logout-btn']").simulate('press');
			expect(mockFn).toHaveBeenCalled();
		});
	});
});
