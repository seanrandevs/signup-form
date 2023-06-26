import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

  test('rendering header', () => {
    render(<App />);
    const heading = screen.getByText(/lets get started! create your account/i);
    expect(heading).toBeInTheDocument();
  });

  test('testing completed sign up form', () => {
    render(<App />);
    const name = screen.getByPlaceholderText(/Enter your username/i)
    const email = screen.getByPlaceholderText(/Enter your Email/i)
    const password = screen.getByPlaceholderText(/Enter your password/i)
    const confirm = screen.getByPlaceholderText(/Confirm your password/i)
    const btn = screen.getByRole('button', { name: /sign up/i })
    userEvent.type(name, 'Sean');
    userEvent.type(email, 'sean@gmail.com');
    userEvent.type(password, '12345678');
    userEvent.type(confirm, '12345678');
    userEvent.click(btn);
    const requestDiv = screen.getByText(/we have received your request!/i);
    expect(requestDiv).toBeInTheDocument();
  });
