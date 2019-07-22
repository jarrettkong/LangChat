import * as actions from "../../actions/index";
import AuthReducer from "../AuthReducer";

describe("AuthReducer", () => {
  it("should return state on default", () => {
    const expected = {"password": "", "username": ""};
    const result = AuthReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});