import * as championsBriefActions from "../../redux/actions/championsBriefActions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SearchMenu from "../SearchMenu/SearchMenu";
import styles from "./ChampionsPage.Module.scss";
import ChampionsList from "../ChampionsList/ChampionsList";

const ChampionsPage = ({ onLoadChampions, championsBrief }) => {
  const [champions, setChampions] = useState([...championsBrief]);

  useEffect(() => {
    if (championsBrief.length === 0) {
      onLoadChampions().catch((error) => alert("Whooooooa"));
    } else {
      setChampions([...championsBrief]);
    }
  }, [championsBrief]);

  if (championsBrief.length === 0) {
    return <p>Loading...</p>;
  }

  const filterHandler = (searchValue) => {
    let filteredChampions = championsBrief.filter((champion) => {
      let championCombinedTags = champion.tags.join("").toLowerCase();
      let championName = champion.name.toLowerCase();

      return (
        championCombinedTags.includes(searchValue.role.toLowerCase()) &&
        championName.includes(searchValue.text.toLowerCase())
      );
    });

    setChampions(filteredChampions);
  };

  return (
    <section className={styles.container} tabindex="-1">
      <header>
        <h2>Champions</h2>
        <p>
          Mark your preferred champions with a star. Master one of master them
          all!
        </p>
      </header>
      <SearchMenu onFilter={filterHandler} />
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
