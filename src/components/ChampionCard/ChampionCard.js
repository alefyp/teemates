import styles from "./ChampionCard.Module.scss";
const ChampionCard = ({ champion }) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={champion.name} />

      <div>
        <h3>{champion.name}</h3>
        {/* <p>{champion.Tags[0]}</p> */}
      </div>
    </div>
  );
};

export default ChampionCard;
