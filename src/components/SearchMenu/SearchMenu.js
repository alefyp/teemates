import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/lupa.svg";
import styles from "./SearchMenu.module.scss";

const SearchMenu = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState({ text: "", role: "" });

  const [rolType, setRolType] = useState("");

  const roles = [
    "Assassin",
    "Fighter",
    "Mage",
    "Marksman",
    "Support",
    "Tank",
    "",
  ];

  const rolTabs = roles.map((rol) => (
    <li key={rol}>
      <button
        role="tab"
        className={rolType === rol ? styles.active : styles.inactive}
        id={`tab-for-${rol}`}
        onClick={() => {
          let newTerm = { text: searchTerm.text, role: rol };
          setSearchTerm(newTerm);
          setRolType(rol);
          onFilter(newTerm);
        }}
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
            value={searchTerm.text}
            onChange={(e) => {
              let term = e.target.value;
              let newTerm = { text: term, role: searchTerm.role };
              setSearchTerm(newTerm);
              onFilter(newTerm);
            }}
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
