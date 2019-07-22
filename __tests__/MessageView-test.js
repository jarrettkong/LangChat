// __tests__/MessageView-test.js
import React from 'react';
import MessageView from '../src/components/MessageView/MessageView';

import renderer from 'react-test-renderer';

const mockUserName = [ 'mockUser' ];
const mockMessages = ["This is a mock message", "Another mock message"];

describe('MessageView Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<MessageView messages={mockMessages} username={mockUserName} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
