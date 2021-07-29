import { render, screen } from "@testing-library/react";
import App from "../App";

test('renders something with "getting started" on it', () => {
  render(<App />);
  const linkElement = screen.getByText(/getting started/i);
  expect(linkElement).toBeInTheDocument();
});
