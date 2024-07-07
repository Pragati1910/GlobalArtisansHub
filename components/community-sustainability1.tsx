import type { NextPage } from "next";
import styles from "./community-sustainability1.module.css";

export type CommunitySustainability1Type = {
  className?: string;
};

const CommunitySustainability1: NextPage<CommunitySustainability1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.communitySustainability, className].join(" ")}>
      <div className={styles.communityValues}>
        <div className={styles.communityValuesChild} />
        <img
          className={styles.sustainabilityValuesIcon}
          loading="lazy"
          alt=""
          src="/rectangle-4141@2x.png"
        />
        <div className={styles.sustainabilityContent}>
          <div className={styles.sustainabilityDetailsParent}>
            <div className={styles.sustainabilityDetails}>
              <h1 className={styles.sustainablity}>Sustainablity</h1>
            </div>
            <div className={styles.ourCommitmentTo}>
              Our commitment to the environment is reflected in our use of
              eco-friendly materials and sustainable production methods. We
              prioritize practices that minimize our ecological footprint,
              ensuring that our products are not only beautiful but also kind to
              the planet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySustainability1;
