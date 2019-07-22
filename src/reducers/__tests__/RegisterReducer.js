import * as actions from "../../actions/index";
import RegisterReducer from "../RegisterReducer";

describe("RegisterReducer", () => {
  it("should return state on default", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});