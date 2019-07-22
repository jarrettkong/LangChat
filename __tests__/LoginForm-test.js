// __tests__/LoginForm-test.js
import React from 'react';
import { LoginForm } from '../src/components/LoginForm/LoginForm';

import renderer from 'react-test-renderer';

describe('LoginForm Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<LoginForm />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
