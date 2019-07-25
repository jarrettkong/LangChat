import * as actions from '../index';

describe('actions', () => {
	it('should return a type of CHANGE_USERNAME', () => {
		const text = 'mockUser';
		const expected = {
			type: 'CHANGE_USERNAME',
			text
		};

		const result = actions.changeUsername(text);
		expect(result).toEqual(expected);
	});

	it('should return a type of CHANGE_PASSWORD', () => {
		const text = 'mockPassword';
		const expected = {
			type: 'CHANGE_PASSWORD',
			text
		};

		const result = actions.changePassword(text);
		expect(result).toEqual(expected);
	});

	it('should return a type of CREATE_EMAIL', () => {
		const text = 'mockEmail';
		const expected = {
			type: 'CREATE_EMAIL',
			text
		};

		const result = actions.createEmail(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of CREATE_PASSWORD', () => {
		const text = 'mockPassword';
		const expected = {
			type: 'CREATE_PASSWORD',
			text
		};

		const result = actions.createPassword(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of CREATE_FIRST_NAME', () => {
		const text = 'mockFirstName';
		const expected = {
			type: 'CREATE_FIRST_NAME',
			text
		};

		const result = actions.createFirstName(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of CREATE_LAST_NAME', () => {
		const text = 'mockLastName';
		const expected = {
			type: 'CREATE_LAST_NAME',
			text
		};

		const result = actions.createLastName(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of CREATE_USERNAME', () => {
		const text = 'mockUserName';
		const expected = {
			type: 'CREATE_USERNAME',
			text
		};

		const result = actions.createUserName(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of CREATE_COUNTRY', () => {
		const text = 'mockCountry';
		const expected = {
			type: 'CREATE_COUNTRY',
			text
		};

		const result = actions.createCountry(text);
		expect(result).toEqual(expected);
  });
  
  it('should return a type of ADD_MESSAGE', () => {
		const message = 'This is a mock message';
		const expected = {
			type: 'ADD_MESSAGE',
			message
		};

		const result = actions.addMessage(message);
		expect(result).toEqual(expected);
	});

	it("should return a type of HANDLE_ERROR", () => {
    const errorMessage = "This is a mock error message";
    const expected = {
      type: "HANDLE_ERROR",
      errorMessage
    };

    const result = actions.handleError(errorMessage);
    expect(result).toEqual(expected);
  });
});
