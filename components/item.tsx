import type { NextPage } from "next";
import styles from "./item.module.css";

export type ItemType = {
  className?: string;
  icon?: string;
  title?: string;
};

const Item: NextPage<ItemType> = ({ className = "", icon, title }) => {
  return (
    <div className={[styles.item, className].join(" ")}>
      <div className={styles.featuredItemsIconsParent}>
        <div className={styles.featuredItemsIcons}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <img className={styles.itemChild} alt="" src="/vector-200.svg" />
    </div>
  );
};

export default Item;
