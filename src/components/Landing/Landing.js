import styles from "./Landing.module.scss";

import IntroSection from "./components/IntroSection";
import PowerSection from "./components/PowerSection";
import ExperienceSection from "./components/ExperienceSection";

const Landing = () => {
  return (
    <div className={styles.container}>
      <IntroSection />
      <PowerSection />
      <ExperienceSection />
    </div>
  );
};

export default Landing;
