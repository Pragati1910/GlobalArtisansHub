import type { NextPage } from "next";
import styles from "./our-values-columns.module.css";

export type OurValuesColumnsType = {
  className?: string;
};

const OurValuesColumns: NextPage<OurValuesColumnsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.ourValuesColumns, className].join(" ")}>
      <div className={styles.ourValuesColumnsChild} />
      <img
        className={styles.ourValuesColumnsItem}
        loading="lazy"
        alt=""
        src="/rectangle-4141@2x.png"
      />
      <div className={styles.sustainabilityTitleContainerWrapper}>
        <div className={styles.sustainabilityTitleContainer}>
          <div className={styles.sustainablityWrapper}>
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
  );
};

export default OurValuesColumns;
