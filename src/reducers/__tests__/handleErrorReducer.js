import * as actions from '../../actions/index';
import handleErrorReducer from '../handleErrorReducer';

describe('handleErrorReducer', () => {
	it('should return state on default', () => {
		const expected = '';
		const result = handleErrorReducer(undefined, '');
		expect(result).toEqual(expected);
	});

	it('should return state with an array of current member', () => {
		const expected = 'This is a mock Error';
		const result = handleErrorReducer(undefined, actions.handleError('This is a mock Error'));

		expect(result).toEqual(expected);
	});
});
