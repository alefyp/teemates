import ChampionCard from "../ChampionCard/ChampionCard";

const ChampionsList = ({ champions }) => {
  console.log(champions, "holongo", Object.values(champions));

  const champList = champions.map((champ) => <ChampionCard champion={champ} />);
  return <ul>{champList}</ul>;
};

export default ChampionsList;
