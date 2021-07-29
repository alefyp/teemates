import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import ChampionsPage from "./ChampionsPage";
const store = configureStore();

test('renders champions container page and checks everything is laid out correctly"', () => {
  render(
    <Provider store={store}>
      <ChampionsPage />
    </Provider>
  );
  const titleElement = screen.getByText(/CHAMPIONS/i);
  expect(titleElement).toBeInTheDocument();
});
