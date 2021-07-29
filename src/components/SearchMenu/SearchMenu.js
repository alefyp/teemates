import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/lupa.svg";
import styles from "./SearchMenu.module.scss";

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rolType, setRolType] = useState("");

  const roles = [
    "Assassins",
    "Fighters",
    "Mages",
    "Marksmen",
    "Support",
    "Tank",
    "",
  ];

  const rolTabs = roles.map((rol) => (
    <li key={rol}>
      <button
        id="tab"
        className={rolType === rol ? styles.active : styles.inactive}
        onClick={() => setRolType(rol)}
      >
        {rol === "" ? "All" : rol}
      </button>
    </li>
  ));

  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav__search}>
          <label htmlFor="search-term">
            <span>Search: </span>
          </label>
          <input
            name="search-term"
            placeholder="Search"
            aria-label=""
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className={styles.SearchIcon} />
        </div>
        <div className={styles.nav__tabs}>
          <ul>{rolTabs}</ul>
        </div>
      </nav>
    </section>
  );
};

export default SearchMenu;
