import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import styles from "./TeamList.Module.scss";

const TeamList = ({ team, onAddChamp, onRemoveChamp }) => {
  if (team.length === 0) {
    return (
      <section className={styles.noTeam}>
        <p>
          It seems that you have not selected any champions for your team yet.
          Go to the champions tab and start selecting your composition.{" "}
        </p>
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-panda-teemo-skinsplashartchampionleague-of-legendsskinteemo-331519930453piqjc.png"
          alt="Teemo"
        />
        <Link to="/champions">
          <button type="button" className={styles.backButton}>
            Take me there! <Arrow />{" "}
          </button>
        </Link>
      </section>
    );
  }
  const teamMember = team.map((champion) => (
    <li key={champion.id}>{champion.id}</li>
  ));

  return <ul>{teamMember}</ul>;
};

export default TeamList;
