import * as actions from "../../actions/index";
import tokenReducer from "../tokenReducer";

describe("tokenReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = tokenReducer(undefined, false);
    expect(result).toEqual(expected);
  });

	it('should return state of true', () => {
		const expected = undefined;
		const result = tokenReducer(undefined, actions.login(true));

		expect(result).toEqual(expected);
	});

	it('should return state of true', () => {
		const expected = null;
		const result = tokenReducer(undefined, actions.logout(null));

		expect(result).toEqual(expected);
	});
});