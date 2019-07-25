// __tests__/Welcome-test.js
import React from 'react';
import { Welcome, mapStateToProps, mapDispatchToProps } from '../src/components/Welcome/Welcome';
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

describe('Welcome', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<Welcome user={mockUser} />
		);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
	it('should return an object', () => {
		const mockData = {
			user: ''
		};
		const expected = {
			user: ''
		};

		const mockProps = mapStateToProps(mockData);
		expect(mockProps).toEqual(expected);
	});
});