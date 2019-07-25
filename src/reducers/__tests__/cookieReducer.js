import * as actions from "../../actions/index";
import cookieReducer from "../cookieReducer";

describe("cookieReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = cookieReducer(undefined, false);
    expect(result).toEqual(expected);
  });


	it('should return state of true', () => {
		const expected = undefined;
		const result = cookieReducer(undefined, actions.login(true));

		expect(result).toEqual(expected);
	});

	it('should return state of true', () => {
		const expected = null;
		const result = cookieReducer(undefined, actions.logout(null));

		expect(result).toEqual(expected);
	});
});