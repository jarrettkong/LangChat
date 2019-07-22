// __tests__/Tutorial-test.js
import React from 'react';
import Tutorial from '../src/components/Tutorial/Tutorial';

import renderer from 'react-test-renderer';

describe('Tutorial Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Tutorial />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
