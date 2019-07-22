// __tests__/Button-test.js
import React from 'react';
import Button from '../src/components/common/Button';

import renderer from 'react-test-renderer';

describe('Button Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Button />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
