import ChampionsList from "./ChampionsList";
import { render, screen } from "@testing-library/react";

test("renders champion card list and expects to render all champs", () => {
  const losChamps = [
    { tags: ["Soy un tag"], id: "Aatrox", name: "Aatrox" },
    { tags: ["Soy otro tag"], id: "Ahri", name: "Ahri" },
  ];

  render(<ChampionsList champions={losChamps} />);
  expect(screen.getAllByRole("img")).toHaveLength(losChamps.length);
});
