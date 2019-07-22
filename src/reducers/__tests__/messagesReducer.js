import * as actions from "../../actions/index";
import messagesReducer from "../messagesReducer";

describe("messagesReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = messagesReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of messages", () => {
    const expected = ["This is a mock message"];
    const result = messagesReducer(undefined, actions.addMessage("This is a mock message"));

    expect(result).toEqual(expected);
  });
});