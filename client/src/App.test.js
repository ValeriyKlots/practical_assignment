import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import { Provider } from 'react-redux';
import users from './Users';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
