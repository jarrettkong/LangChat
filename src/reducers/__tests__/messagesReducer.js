import * as actions from "../../actions/index";
import messagesReducer from "../messagesReducer";

const mockMessages = ["This is a mock message", "This is another mock message"]

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

	it('should return state of true', () => {
		const expected = mockMessages;
		const result = messagesReducer(undefined, actions.addExistingMessages(mockMessages));

		expect(result).toEqual(expected);
	});
});