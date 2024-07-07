import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.handmadeWithHeartConnectinWrapper}>
        <h3 className={styles.handmadeWithHeart}>
          Handmade with heart, connecting communities across continents, forging
          a path to sustainable livelihoods.
        </h3>
      </div>
      <div className={styles.heroImageBgParent}>
        <img
          className={styles.heroImageBg}
          loading="lazy"
          alt=""
          src="/rectangle-4150@2x.png"
        />
        <div className={styles.heroImageDecorationParent}>
          <div className={styles.heroImageDecoration} />
          <div className={styles.heroImageDecoration1} />
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
