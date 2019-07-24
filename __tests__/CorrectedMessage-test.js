// __tests__/CorrectedMessage-test.js
import React from 'react';
import CorrectedMessage from '../src/components/CorrectedMessage/CorrectedMessage';

import renderer from 'react-test-renderer';

const mockReference = {
	id: 89,
	message: 'Got a spot for us to roll',
	reference: null,
	room: 2,
	timestamp: '2019-07-22T20:34:02.045Z',
	user: 2,
	username: 'test_user1'
};

describe('CorrectedMessage Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<CorrectedMessage reference={mockReference} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
