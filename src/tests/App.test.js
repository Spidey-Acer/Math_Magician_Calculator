import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navigation menu', () => {
  render(<App />);
  const navigationMenuElement = screen.getByTestId('navigation-menu');
  expect(navigationMenuElement).toBeInTheDocument();
});

test('renders Home page by default', () => {
  render(<App />);
  const homePageElement = screen.getByTestId('home-page');
  expect(homePageElement).toBeInTheDocument();
});

test('navigates to Calculator page', () => {
  render(<App />);
  const calculatorLink = screen.getByText(/Calculator/i);
  expect(calculatorLink).toBeInTheDocument();

  // Simulate user click on Calculator link
  calculatorLink.click();

  const calculatorPageElement = screen.getByTestId('calculator-page');
  expect(calculatorPageElement).toBeInTheDocument();
});

test('navigates to Quote page', () => {
  render(<App />);
  const quoteLink = screen.getByText(/Quote/i);
  expect(quoteLink).toBeInTheDocument();

  // Simulate user click on Quote link
  quoteLink.click();

  const quotePageElement = screen.getByTestId('quote-page');
  expect(quotePageElement).toBeInTheDocument();
});
