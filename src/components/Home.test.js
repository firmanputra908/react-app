// src/components/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders main heading', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Bandeng Bu Yem Semarang Enak Sekali Rasanya.../i);
  expect(headingElement).toBeInTheDocument();
});

test('renders paragraph text', () => {
  render(<Home />);
  const paragraphElement = screen.getByText(/Dibuat tanpa pengawet dan tanpa pewarna buatan/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('renders order button', () => {
  render(<Home />);
  const buttonElement = screen.getByRole('button', { name: /Order/i });
  expect(buttonElement).toBeInTheDocument();
});
