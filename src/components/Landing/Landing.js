import styles from "./Landing.module.scss";

import IntroSection from "./components/IntroSection";
import PowerSection from "./components/PowerSection";
import ExperienceSection from "./components/ExperienceSection";

const Landing = () => {
  return (
    <section className={styles.container} tabindex="-1">
      <IntroSection />
      <PowerSection />
      <ExperienceSection />
    </section>
  );
};

export default Landing;
