import styles from "./Header.module.scss";
import logo from "./../../assets/pngegg.png";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Teemates logo" />
    </header>
  );
}

export default Header;
