import { BrowserRouter as NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="jeje">
            Getting started
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact activeClassName="jeje">
            Getting started
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
