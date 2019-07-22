// __tests__/SplashPage-test.js
import React from 'react';
import SplashPage from '../src/components/SplashPage/SplashPage';

import renderer from 'react-test-renderer';

describe('SplashPage Component', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<SplashPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
