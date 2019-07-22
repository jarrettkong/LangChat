// __tests__/NavDrawer-test.js
import React from 'react';
import { NavDrawer } from '../src/components/NavDrawer/NavDrawer';

import renderer from 'react-test-renderer';

describe('NavDrawer Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<NavDrawer />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
