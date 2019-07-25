import * as actions from '../../actions/index';
import authenticationReducer from '../authenticationReducer';

describe('authenticationReducer', () => {
	it('should return state on default', () => {
		const expected = false;
		const result = authenticationReducer(undefined, false);
		expect(result).toEqual(expected);
	});

	it('should return state of true', () => {
		const expected = true;
		const result = authenticationReducer(undefined, actions.login(true));

		expect(result).toEqual(expected);
	});

	it('should return state of true', () => {
		const expected = false;
		const result = authenticationReducer(undefined, actions.logout(false));

		expect(result).toEqual(expected);
	});
});
