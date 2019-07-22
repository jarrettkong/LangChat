import * as actions from "../../actions/index";
import AuthReducer from "../AuthReducer";

describe("AuthReducer", () => {
  it("should return state on default", () => {
    const expected = {"password": "", "username": ""};
    const result = AuthReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of username", () => {
    const expected = {"password": "", "username": "mockUser"};
    const result = AuthReducer(undefined, actions.changeUsername("mockUser"));

    expect(result).toEqual(expected);
  });

  it("should return state with an array of password", () => {
    const expected = {"password": "mockPassword", "username": ""};
    const result = AuthReducer(undefined, actions.changePassword("mockPassword"));

    expect(result).toEqual(expected);
  });
});