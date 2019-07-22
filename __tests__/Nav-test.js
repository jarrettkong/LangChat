// __tests__/Nav-test.js
import React from 'react';
import Nav from '../src/components/Nav/Nav';

import renderer from 'react-test-renderer';

describe('Nav Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Nav />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
