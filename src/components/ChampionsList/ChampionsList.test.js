import ChampionsList from "./ChampionsList";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
const store = configureStore();

test("renders champion card list and expects to render all champs", () => {
  const losChamps = [
    { tags: ["I'm a tag"], id: "Aatrox", name: "Aatrox" },
    { tags: ["Im other tag"], id: "Ahri", name: "Ahri" },
  ];

  render(
    <Provider store={store}>
      <ChampionsList champions={losChamps} />
    </Provider>
  );
  expect(screen.getAllByRole("img")).toHaveLength(losChamps.length);
});
