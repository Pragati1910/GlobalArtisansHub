import type { NextPage } from "next";
import styles from "./hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroContentInner}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>
              Introduction to Partnership Opportunities
            </h1>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                Learn how to partner with us to support inclusivity,
                sustainability, and artisanal communities.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroCard}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar.svg"
          />
          <div className={styles.heroCardInner}>
            <div className={styles.titleGroup}>
              <h3 className={styles.title1}>Become an Artisan Partner</h3>
              <div className={styles.description1}>
                Join us as an artisan partner to showcase your craft and be part
                of our marketplace.
              </div>
            </div>
          </div>
          <div className={styles.primaryAction}>
            <button className={styles.primary}>
              <div className={styles.title2}>Apply Now</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
