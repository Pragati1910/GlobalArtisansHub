import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import styles from "./categories.module.css";

export type CategoriesType = {
  className?: string;
};

const Categories: NextPage<CategoriesType> = ({ className = "" }) => {
  return (
    <div className={[styles.categories, className].join(" ")}>
      <div className={styles.categoriesContent}>
        <div className={styles.categoryItems}>
          <FrameComponent2
            categoryIcon="/category-icon@2x.png"
            jewellery="Jewellery"
          />
          <FrameComponent2
            categoryIcon="/rectangle-4148@2x.png"
            jewellery="Personal Care"
            propWidth="unset"
            propMinWidth="227px"
            propFlex="1"
          />
        </div>
        <div className={styles.homeDecorIconParent}>
          <img
            className={styles.homeDecorIcon}
            alt=""
            src="/home-decor-icon@2x.png"
          />
          <div className={styles.homeDecorBackground} />
          <b className={styles.homeDecor}>Home Decor</b>
          <img
            className={styles.northEastIcon}
            loading="lazy"
            alt=""
            src="/north-east.svg"
          />
        </div>
      </div>
      <div className={styles.artCrafts}>
        <div className={styles.artCraftsIconParent}>
          <img
            className={styles.artCraftsIcon}
            alt=""
            src="/art-crafts-icon@2x.png"
          />
          <div className={styles.artCraftsContent}>
            <div className={styles.artCraftsBackground} />
            <b className={styles.artCrafts1}>{`Art & Crafts`}</b>
            <img
              className={styles.northEastIcon1}
              loading="lazy"
              alt=""
              src="/north-east.svg"
            />
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-4149@2x.png"
            />
            <div className={styles.instanceItem} />
            <b className={styles.textilesApparels}>{`Textiles & Apparels`}</b>
            <img
              className={styles.northEastIcon2}
              alt=""
              src="/north-east.svg"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <b className={styles.textilesApparels1}>{`Textiles & Apparels`}</b>
            <img
              className={styles.northEastIcon3}
              loading="lazy"
              alt=""
              src="/north-east.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
