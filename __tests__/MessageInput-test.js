import React from 'react';
import MessageInput from '../src/components/MessageInput/MessageInput';

import renderer from 'react-test-renderer';

describe('MessageInput Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<MessageInput />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should have default state', () => {
		const wrapper = renderer.create(<MessageInput />).getInstance();

		expect(wrapper.state).toEqual({ message: '' });
	});
});
