import * as championsBriefActions from "../../redux/actions/championsBriefActions";
import { useEffect } from "react";
import { connect } from "react-redux";
import SearchMenu from "../SearchMenu/SearchMenu";

const ChampionsPage = ({ onLoadChampions, championsBrief }) => {
  useEffect(() => {
    onLoadChampions();
  }, []);

  console.log(championsBrief);

  return (
    <div>
      <h2>Champions</h2>
      <SearchMenu />
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
