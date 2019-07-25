// __tests__/Nav-test.js
import React from 'react';
import { Nav, mapStateToProps, mapDispatchToProps } from '../src/components/Nav/Nav';
import * as actions from '../src/actions/index';
import { BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { shallow } from 'enzyme';
import routes from '../src/Router';

describe('Nav', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(<Nav />);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
	});
});
