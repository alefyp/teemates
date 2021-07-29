import styles from "./TeamMemberCard.Module.scss";

const TeamMemberCard = ({ champion }) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.container__title}>
          {champion.name}:{champion.title}
        </h1>
        <img src={imageUrl} alt={champion.name} />
      </header>
      <p>{champion.blurb}</p>
      <div>
        <p>
          Tags: {champion.tags[0]} {champion.tags[1]}
        </p>
      </div>
    </section>
  );
};

export default TeamMemberCard;
