import * as actions from "../../actions/index";
import cookieReducer from "../cookieReducer";

describe("cookieReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = cookieReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});