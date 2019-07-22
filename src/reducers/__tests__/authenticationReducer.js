import * as actions from "../../actions/index";
import authenticationReducer from "../authenticationReducer";

describe("authenticationReducer", () => {
  it("should return state on default", () => {
    const expected = false;
    const result = authenticationReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});