import styles from "../Landing.module.scss";

const IntroSection = () => {
  return (
    <section className={styles.container__intro}>
      <div>
        <h2>WHAT IS THIS?!</h2>
        <p>
          League of Legends is a team-based strategy game where two teams of
          five powerful champions face off to destroy the other’s base. You can
          choose from over 140 champions to make epic plays, secure kills, and
          take down towers as you battle your way to victory.
        </p>
        <br></br>
        <strong>
          But wait a minute... 140 champions? That's a lot! How can I choose
          one?
        </strong>
      </div>

      <img
        className={styles.container__img__thresh}
        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/support-d63ae08baf517425864ddc020a5871d5.png"
        alt="Thresh"
        role="presentation"
      />
    </section>
  );
};

export default IntroSection;
