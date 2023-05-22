/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, fireEvent } = require('@testing-library/react');
const Contact = require('../presentation/components/Contact').default;

test('displays error message for invalid phone number formatted without hyphens', () => {
  const { getByLabelText, getByText } = render(
    React.createElement(Contact, { handleClose: () => {} })
  );
 
    // Find phone number inputs
    const phoneInput = getByLabelText('Phone Number (xxx-xxx-xxxx)');
 
    // Try inputting an invalid phone number
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
 
    // Find the submit button and submit info with invalid phone number
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
 
    // Check the error message to be the same
    const errorMessage = getByText('Please match the requested format.');
    expect(errorMessage).toBeInTheDocument();
});
