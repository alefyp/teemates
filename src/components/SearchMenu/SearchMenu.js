import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/lupa.svg";
import styles from "./SearchMenu.module.scss";

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rolType, setRolType] = useState("Tank");

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
        className={`${styles.button} ${
          rolType === rol ? styles.active : styles.inactive
        }`}
        onClick={(rol) => setRolType(rol)}
      >
        {rol === "" ? "All" : rol}
      </button>
    </li>
  ));

  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav__search}>
          <SearchIcon />
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
        </div>
        <div className={styles.nav__tabs}>
          <ul>{rolTabs}</ul>
        </div>
      </nav>
    </section>
  );
};

export default SearchMenu;
