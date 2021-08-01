import * as teamActions from "../../redux/actions/teamActions";
import { connect } from "react-redux";
import TeamList from "../TeamList/TeamList";
import styles from "./TeamContainer.Module.scss";

function TeamContainer({ team, onAddChamp, onRemoveChamp }) {
  console.log(team, "My team");
  return (
    <section className={styles.container} tabindex="-1">
      <h2>TEAM SELECT</h2>
      <TeamList
        team={team}
        onAddChamp={onAddChamp}
        onRemoveChamp={onRemoveChamp}
      />
    </section>
  );
}

/* Team redux container */

const mapStateToProps = (state) => {
  return { team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddChamp: () => dispatch(teamActions.addChampion),
    onRemoveChamp: () => dispatch(teamActions.removeChampion),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
