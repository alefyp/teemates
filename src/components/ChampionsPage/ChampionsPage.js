import * as championsBriefActions from "../../redux/actions/championsBriefActions";
import { useEffect } from "react";
import { connect } from "react-redux";

const ChampionsPage = ({ onLoadChampions, championsBrief }) => {
  useEffect(() => {
    onLoadChampions();
  }, []);

  return (
    <div>
      <h1>soy la página con todos los champs</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { championsBrief: state.championsBrief };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadChampions: () => dispatch(championsBriefActions.loadChampionsBrief()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage);
