import * as actions from "../../actions/index";
import userReducer from "../userReducer";

describe("userReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = userReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});