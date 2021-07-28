import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import styles from "../Landing.module.scss";

const ExperienceSection = () => {
  return (
    <section className={styles.container__experience}>
      <div>
        <h2>POWER UP</h2>
        <p>
          When champions earn a certain amount of experience, they level up and
          can unlock or strengthen abilities and raise their base stats. Gain
          experience by killing enemy units and champions, assisting in a kill,
          and destroying defense structures.
        </p>
        <br></br>
        <p>
          Champions get stronger by earning experience to level up and gold to
          buy more powerful items as the game progresses. Staying on top of
          these two factors is crucial to overpowering the enemy team and
          destroying their base.
        </p>

        <Link to="/champions">
          <button type="button">
            Take a look to the champions <Arrow />{" "}
          </button>
        </Link>
      </div>

      <img
        className={styles.container__img__akali}
        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png"
        alt="Akali"
        role="presentation"
      />
    </section>
  );
};

export default ExperienceSection;
