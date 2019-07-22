// __tests__/Button-test.js
import React from 'react';
import Button from '../src/components/common/Button';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const tree = renderer.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});
