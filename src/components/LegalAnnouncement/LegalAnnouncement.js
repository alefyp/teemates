import styles from "./LegalAnnouncement.module.scss";

function LegalAnnouncement() {
  return (
    <aside className={styles.container}>
      <p>
        {" "}
        <i>Teemates</i> isn't endorsed by Riot Games and doesn't reflect the
        views or opinions of Riot Games or anyone officially involved in
        producing or managing Riot Games properties. Riot Games, and all
        associated properties are trademarks or registered trademarks of Riot
        Games, Inc.
      </p>
    </aside>
  );
}

export default LegalAnnouncement;
