import styles from "./Landing.module.scss";

function Landing() {
  return (
    <div className={styles.container}>
      <section className={styles.container__intro}>
        <div>
          <h1>Welcome to Teemates!</h1>
          <p>
            League of Legends is a team-based strategy game where two teams of
            five powerful champions face off to destroy the other’s base. Choose
            from over 140 champions to make epic plays, secure kills, and take
            down towers as you battle your way to victory.
          </p>
        </div>

        <img
          className={styles.container__img__thresh}
          src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/support-d63ae08baf517425864ddc020a5871d5.png"
          alt="Thresh"
          role="presentation"
        />
      </section>

      <section className={styles.container__power}>
        <h2>POWER UP YOUR CHAMP </h2>
        <p>
          Champions get stronger by earning experience to level up and gold to
          buy more powerful items as the game progresses. Staying on top of
          these two factors is crucial to overpowering the enemy team and
          destroying their base.
        </p>
      </section>

      <section className={styles.container__experience}>
        <div>
          <h2>Ear Experience!</h2>
          <p>
            When champions earn a certain amount of experience, they level up
            and can unlock or strengthen abilities and raise their base stats.
            Gain experience by killing enemy units and champions, assisting in a
            kill, and destroying defense structures.
          </p>
          <button>Meet them all!</button>
        </div>

        <img
          className={styles.container__img__akali}
          src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png"
          alt="Akali"
          role="presentation"
        />
      </section>
    </div>
  );
}

export default Landing;
