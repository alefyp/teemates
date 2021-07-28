import LegalAnnouncement from "../LegalAnnouncement/LegalAnnouncement";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <p>Powered by sushi and developed by Alefy</p>
      <p>
        Teemates - Globant React and React Native Bootcamp Final Project - 2021
        You can find the{" "}
        <a
          href="https://github.com/alefyp/teemates"
          target="_blank"
          rel="noopener noreferrer"
        >
          repository available here.
        </a>
      </p>
      <LegalAnnouncement />
    </footer>
  );
}

export default Footer;
