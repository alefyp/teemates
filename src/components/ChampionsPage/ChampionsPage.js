import * as championsBriefActions from "../../redux/actions/championsBriefActions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SearchMenu from "../SearchMenu/SearchMenu";
import styles from "./ChampionsPage.Module.scss";
import ChampionsList from "../ChampionsList/ChampionsList";
import { filterByInput, filterByRol } from "./filters";

const ChampionsPage = ({ onLoadChampions, championsBrief }) => {
  // const [champions, setChampions] = useState([]);
  useEffect(() => {
    onLoadChampions();
  }, []);

  const champions = Object.values(championsBrief);

  const handleFilter = (searchValue, rolTypeValue) => {
    // champions = filterByInput(champions, searchValue);
    // champions = filterByRol(champions, rolTypeValue);
  };

  if (championsBrief.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.container}>
      <header>
        <h2>Champions</h2>
      </header>
      <SearchMenu handleFilter={handleFilter} />
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
