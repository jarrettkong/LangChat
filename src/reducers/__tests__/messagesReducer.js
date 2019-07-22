import * as actions from "../../actions/index";
import messagesReducer from "../messagesReducer";

describe("messagesReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = messagesReducer(undefined, false);
    expect(result).toEqual(expected);
  });
});