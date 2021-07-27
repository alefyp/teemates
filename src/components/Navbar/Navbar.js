import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.nav__selected}>
            Getting started
          </NavLink>
        </li>
        <li>
          <NavLink to="/champions" exact activeClassName={styles.nav__selected}>
            Champions
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" exact activeClassName={styles.nav__selected}>
            The dream team ♡
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
