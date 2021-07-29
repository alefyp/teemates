import { render, screen } from "@testing-library/react";
import ChampionCard from "./ChampionCard";

test('renders champion card and checks everything is laid out correctly"', () => {
  const elChamp = { tags: ["Soy un tag"], id: "Aatrox", name: "Aatrox" };

  render(<ChampionCard champion={elChamp} />);
  const linkElement = screen.getByText(/Aatrox/i);
  expect(linkElement).toBeInTheDocument();

  const tagsElement = screen.getByText(/Soy un tag/i);
  expect(tagsElement).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${elChamp.id}_0.jpg`
  );
  expect(image).toHaveAttribute("alt", elChamp.name);
});
