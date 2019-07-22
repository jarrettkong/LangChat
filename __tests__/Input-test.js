// __tests__/Input-test.js
import React from 'react';
import Input from '../src/components/common/Input';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const tree = renderer.create(<Input />).toJSON();
	expect(tree).toMatchSnapshot();
});
