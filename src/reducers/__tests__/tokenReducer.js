import * as actions from "../../actions/index";
import tokenReducer from "../tokenReducer";

describe("tokenReducer", () => {
  it("should return state on default", () => {
    const expected = null;
    const result = tokenReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});