/* eslint-disable testing-library/no-debugging-utils */
import Hero from '@app/components/Hero';
import { render, screen } from '@testing-library/react';

test('Should render Hero section', () => {
  render(<Hero />);

  screen.logTestingPlaygroundURL();
});
