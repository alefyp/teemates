import styles from "./Landing.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

function Landing() {
  return (
    <div className={styles.container}>
      <section className={styles.container__intro}>
        <div>
          <h3>WHAT IS THIS?!</h3>
          <p>
            League of Legends is a team-based strategy game where two teams of
            five powerful champions face off to destroy the other’s base. You
            can choose from over 140 champions to make epic plays, secure kills,
            and take down towers as you battle your way to victory.
          </p>
          <br></br>
          <strong>
            But wait a minute... 140 champions? That's a lot! How can I pick
            one?
          </strong>
          '
        </div>

        <img
          className={styles.container__img__thresh}
          src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/support-d63ae08baf517425864ddc020a5871d5.png"
          alt="Thresh"
          role="presentation"
        />
      </section>

      <section className={styles.container__power}>
        <h3>HEADS UP!</h3>
        <p>
          A team composition should be made up of 5 champions that fulfill the
          function for each fundamental role. In the champions option you can
          add your favorites for the selection phase and determine if your team
          has everything to win ...or troll.
        </p>
      </section>

      <section className={styles.container__experience}>
        <div>
          <h3>POWER UP</h3>
          <p>
            When champions earn a certain amount of experience, they level up
            and can unlock or strengthen abilities and raise their base stats.
            Gain experience by killing enemy units and champions, assisting in a
            kill, and destroying defense structures.
          </p>
          <br></br>
          <p>
            Champions get stronger by earning experience to level up and gold to
            buy more powerful items as the game progresses. Staying on top of
            these two factors is crucial to overpowering the enemy team and
            destroying their base.
          </p>

          <button>
            Take a look to the champions <Arrow />{" "}
          </button>
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
