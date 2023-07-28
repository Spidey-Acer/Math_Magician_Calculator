import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';

test('renders Calculator without crashing', () => {
  const { getByText } = render(<Calculator />);
  const linkElement = getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

test('clicking number button updates the display', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  const display = getByText(/1/i);
  expect(display).toBeInTheDocument();
});

test('performing addition updates the display', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const display = getByText(/3/i);
  expect(display).toBeInTheDocument();
});

test('clicking AC button resets the display', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('AC'));
  const display = getByText(/0/i);
  expect(display).toBeInTheDocument();
});
