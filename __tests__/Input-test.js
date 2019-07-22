// __tests__/Input-test.js
import React from 'react';
import Input from '../src/components/common/Input';

import renderer from 'react-test-renderer';

describe('Input Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Input />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
