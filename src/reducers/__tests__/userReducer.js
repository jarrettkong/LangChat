import * as actions from "../../actions/index";
import userReducer from "../userReducer";

describe("userReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = userReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it('should return state of true', () => {
		const expected = true;
		const result = userReducer(undefined, actions.login(true));

		expect(result).toEqual(expected);
	});

	it('should return state of true', () => {
		const expected = null;
		const result = userReducer(undefined, actions.logout(null));

		expect(result).toEqual(expected);
	});
});