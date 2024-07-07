import type { NextPage } from "next";
import styles from "./featured-card.module.css";

export type FeaturedCardType = {
  className?: string;
};

const FeaturedCard: NextPage<FeaturedCardType> = ({ className = "" }) => {
  return (
    <section className={[styles.featuredCard, className].join(" ")}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>Advocacy and Campaigns</h1>
            <div className={styles.description}>
              Learn about our advocacy initiatives promoting fair trade, gender
              equality, and reduced inequalities. Take action and make a
              difference.
            </div>
          </div>
          <div className={styles.cardItems}>
            <textarea
              className={styles.card}
              placeholder="Advocacy for Fair Trade"
              rows={5}
              cols={12}
            />
            <textarea
              className={styles.card1}
              placeholder="Gender Equality Campaign"
              rows={5}
              cols={12}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
