import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Conversion from '../components/Conversion/Conversion';

// Mock the CSS file import
jest.mock('../components/Conversion/Conversion.css', () => ({}));

test('Testing conversion section', async () => {
  // Render the Conversion component
  render(<Conversion />);

  // Get input fields and button using screen
  const currencyFromInput = screen.getByPlaceholderText('Currency Code From');
  const currencyToInput = screen.getByPlaceholderText('Currency Code To');
  const amountInput = screen.getByPlaceholderText('Amount');
  const convertButton = screen.getByText('Convert');

  // Mock console.log to check if the function is called
  console.log = jest.fn();

  // Type into input fields using user
  await user.type(currencyFromInput, 'USD');
  await user.type(currencyToInput, 'EUR');
  await user.type(amountInput, '100.00');

  // Click the Convert button using user
  await user.click(convertButton);

  // Wait for the converted amount to be displayed
  await waitFor(() => {
    const convertedAmountText = screen.getByText('Converted Amount: 123.45');
    expect(convertedAmountText).toBeInTheDocument();
  });

  // Check if conversion function is called with correct values
  expect(console.log).toHaveBeenCalledWith(
    'Converting:',
    '100.00',
    'USD',
    'to',
    'EUR'
  );
});
