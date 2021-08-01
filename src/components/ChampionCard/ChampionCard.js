import * as teamActions from "../../redux/actions/teamActions";
import { connect } from "react-redux";
import styles from "./ChampionCard.Module.scss";
import { useState } from "react";
import { ReactComponent as StarIcon } from "../../assets/star.svg";

const ChampionCard = ({ champion, onAddChamp, onRemoveChamp, team }) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  const iconButtonState = team.some((element) => element.id === champion.id);
  const [teamStyle, setTeamStyle] = useState(iconButtonState);

  return (
    <li className={styles.container}>
      <img src={imageUrl} alt={champion.name} />

      <div className={styles.utility}>
        <div className={styles.text__container}>
          <h3>{champion.name}</h3>
          <p>
            {" "}
            {champion.tags[0]} | {champion.tags[1]}
          </p>
        </div>
        <div className={styles.button__container}>
          <button
            aria-label={teamStyle ? "Starred champion" : "Non Starred champion"}
            className={styles.button}
            onClick={() => {
              if (team.length === 5 && teamStyle === false) {
                alert("Already 5 champs in your team!");
              } else {
                teamStyle ? onRemoveChamp(champion) : onAddChamp(champion);
                setTeamStyle(!teamStyle);
              }
            }}
          >
            <StarIcon style={{ fill: teamStyle ? "white" : "none" }} />
          </button>
        </div>
      </div>
    </li>
  );
};

/* card redux container */

const mapStateToProps = (state) => {
  return { team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddChamp: (champ) => dispatch(teamActions.addChampion(champ)),
    onRemoveChamp: (champ) => dispatch(teamActions.removeChampion(champ)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampionCard);
