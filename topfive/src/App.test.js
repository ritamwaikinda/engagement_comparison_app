import { render, screen } from '@testing-library/react';
import topFive from './topFive';

test('renders learn react link', () => {
  render(<topFive />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
