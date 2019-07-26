// __tests__/Message-test.js
import React from 'react';
import { Message } from '../src/components/Message/Message';
import { shallow } from 'enzyme';

const mockUserName = [ 'mockUser' ];
const mockMessage = "This is a mock message";
const mockSetReferencedMessage = jest.fn();

describe('Message', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<Message username={mockUserName} message={mockMessage} setReferencedMessage={mockSetReferencedMessage}/>
		);
		instance = wrapper.instance();
	});

	it(`matches snapshot`, () => {
		expect(wrapper).toMatchSnapshot();
	});
	
	it("should invoke 'setReferencedMessage' with correct params when user goes to edit a message", () => {
		wrapper.find("[data-test='edit-mode']").simulate('LongPress')
		expect(mockSetReferencedMessage).toHaveBeenCalled();
	})
});
