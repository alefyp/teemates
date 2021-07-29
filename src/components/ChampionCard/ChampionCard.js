import * as teamActions from "../../redux/actions/teamActions";
import { connect } from "react-redux";
import styles from "./ChampionCard.Module.scss";

const ChampionCard = ({ champion, onAddChamp, onRemoveChamp }) => {
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
        <div>
          <button
            className={styles.button}
            onClick={() => {
              onAddChamp(champion);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

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
