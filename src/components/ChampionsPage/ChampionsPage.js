import * as championsBriefActions from "../../redux/actions/championsBriefActions";
import * as teamActions from "../../redux/actions/teamActions";
import { useEffect } from "react";
import { connect } from "react-redux";
import SearchMenu from "../SearchMenu/SearchMenu";
import styles from "./ChampionsPage.Module.scss";
import ChampionsList from "../ChampionsList/ChampionsList";

const ChampionsPage = ({ onLoadChampions, championsBrief }) => {
  useEffect(() => {
    onLoadChampions();
  }, []);

  const champions = Object.values(championsBrief);

  return (
    <section className={styles.container}>
      <header>
        <h2>Champions</h2>
      </header>
      <SearchMenu />
      <ChampionsList champions={champions} />
    </section>
  );
};

/* Champions redux container */

const mapStateToProps = (state) => {
  return { championsBrief: state.championsBrief, team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadChampions: () => dispatch(championsBriefActions.loadChampionsBrief()),
    onAddChamp: teamActions.addChampion,
    onRemoveChamp: teamActions.removeChampion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage);
