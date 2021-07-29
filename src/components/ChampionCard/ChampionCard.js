import styles from "./ChampionCard.Module.scss";
const ChampionCard = ({ champion }) => {
  console.log(champion.tags[0]);
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={champion.name} />

      <div className={styles.utility}>
        <div>
          <h4>{champion.name}</h4>
          <p>
            {" "}
            {champion.tags[0]} | {champion.tags[1]}
          </p>
        </div>
        <div>⭐</div>
      </div>
    </div>
  );
};

export default ChampionCard;
