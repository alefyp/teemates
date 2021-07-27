import styles from "./Header.module.scss";
import logo from "./../../assets/pngegg.png";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <img src={logo} className={styles.container__img} alt="Teemates logo" />
        <h1>Teemates</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
