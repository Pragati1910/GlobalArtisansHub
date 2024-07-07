import type { NextPage } from "next";
import styles from "./mission.module.css";

export type MissionType = {
  className?: string;
};

const Mission: NextPage<MissionType> = ({ className = "" }) => {
  return (
    <section className={[styles.mission, className].join(" ")}>
      <div className={styles.missionContent}>
        <div className={styles.missionContentChild} />
        <div className={styles.missionStatement}>
          <div className={styles.ourMissionParent}>
            <div className={styles.ourMission}>
              <div className={styles.ourMissionGroup}>
                <h1 className={styles.ourMission1}>Our Mission</h1>
                <div className={styles.missionSeparatorWrapper}>
                  <div className={styles.missionSeparator} />
                </div>
              </div>
            </div>
            <h3 className={styles.ourMissionIs}>
              Our mission is to empower women artisans by providing a platform
              that showcases their unique, handcrafted products to a global
              audience. We aim to support and celebrate the creativity and
              skills of women from diverse backgrounds, fostering a community
              where their artistic talents can thrive. Through fair trade
              practices and sustainable sourcing, we strive to create economic
              opportunities that lead to financial independence and a better
              quality of life for our artisans.
            </h3>
          </div>
        </div>
        <img
          className={styles.missionImageIcon}
          loading="lazy"
          alt=""
          src="/rectangle-4146@2x.png"
        />
      </div>
    </section>
  );
};

export default Mission;
