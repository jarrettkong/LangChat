// __tests__/Message-test.js
import React from 'react';
import Message from '../src/components/Message/Message';

import renderer from 'react-test-renderer';

const mockUserName = [ 'mockUser' ];
const mockMessage = "This is a mock message";

describe('Message Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Message username={mockUserName} message={mockMessage} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
