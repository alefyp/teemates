import * as teamActions from "../../redux/actions/teamActions";
import { useEffect } from "react";
import { connect } from "react-redux";

function TeamContainer({ team, onAddChamp, onRemoveChamp }) {
  console.log(team, "My team");
  return (
    <section>
      <h2>TEAM SELECT</h2>
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
