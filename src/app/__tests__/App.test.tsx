/* eslint-disable testing-library/no-debugging-utils */
import App from '@app/App';
import { render, screen } from '@testing-library/react';

test('Should render Hero section', () => {
  render(<App />);

  screen.logTestingPlaygroundURL();
});

test('Sample test', () => {
  expect(true).toBeTruthy();
});
