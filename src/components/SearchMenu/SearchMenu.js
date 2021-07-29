import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/lupa.svg";
import styles from "./SearchMenu.module.scss";

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rolType, setRolType] = useState("");

  const rols = [
    "Assassins",
    "Fighters",
    "Mages",
    "Marksmen",
    "Support",
    "Tank",
    "",
  ];

  const rolTabs = rols.map((rol, index) => (
    <li key={index}>
      <button
        className={rol === rolType ? styles.active : styles.inactive}
        onClick={(rol) => setRolType(rol)}
      >
        {rol === "" ? "All" : rol}
      </button>
    </li>
  ));

  return (
    <section>
      <nav>
        <div>
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
        <div>
          <ul>{rolTabs}</ul>
        </div>
      </nav>
    </section>
  );
};

export default SearchMenu;
