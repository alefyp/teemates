import ChampionCard from "../ChampionCard/ChampionCard";
import styles from "./ChampionsList.Module.scss";

const ChampionsList = ({ champions }) => {
  const champList = champions.map((champ) => <ChampionCard champion={champ} />);
  return <ul className={styles.container}>{champList}</ul>;
};

export default ChampionsList;
