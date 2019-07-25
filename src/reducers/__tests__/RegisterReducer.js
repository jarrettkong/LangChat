import * as actions from "../../actions/index";
import RegisterReducer from "../RegisterReducer";

describe("RegisterReducer", () => {
  it("should return state on default", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of firstName", () => {
    const expected = {"country": "United States", "email": "", "firstName": "Matthew", "lastName": "", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, actions.createFirstName("Matthew"));

    expect(result).toEqual(expected);
  });
  
  it("should return state with an array of lastName", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "Kaplan", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, actions.createLastName("Kaplan"));

    expect(result).toEqual(expected);
  });

  it("should return state with an array of password", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "", "password": "mockPassword", "userName": ""};
    const result = RegisterReducer(undefined, actions.createPassword("mockPassword"));

    expect(result).toEqual(expected);
  });

  it("should return state with an array of userName", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "", "password": "", "userName": "mockUser"};
    const result = RegisterReducer(undefined, actions.createUserName("mockUser"));

    expect(result).toEqual(expected);
  });

  it("should return state with an array of userName", () => {
    const expected = {"country": "United States", "email": "mockEmail", "firstName": "", "lastName": "", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, actions.createEmail("mockEmail"));

    expect(result).toEqual(expected);
  });

  it("should return state with an array of country", () => {
    const expected = {"country": "United States", "email": "", "firstName": "", "lastName": "", "password": "", "userName": ""};
    const result = RegisterReducer(undefined, actions.createCountry("United States"));

    expect(result).toEqual(expected);
  });
});