// __tests__/Tutorial-test.js
import React from 'react';
import Tutorial from '../src/components/Tutorial/Tutorial';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const tree = renderer.create(<Tutorial />).toJSON();
	expect(tree).toMatchSnapshot();
});
