import * as championsBriefActions from "../../redux/actions/championsBriefActions";
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
  return { championsBrief: state.championsBrief };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadChampions: () => dispatch(championsBriefActions.loadChampionsBrief()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage);
