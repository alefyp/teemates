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
        <div>
          <button
            className={styles.button}
            onClick={() => {
              teamStyle ? onRemoveChamp(champion) : onAddChamp(champion);
              setTeamStyle(!teamStyle);
            }}
          >
            {" "}
            <StarIcon style={{ fill: teamStyle ? "black" : "none" }} />
          </button>
        </div>
      </div>
    </div>
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
