import type { NextPage } from "next";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
  image?: string;
  peacockChandbaliHoopEarri?: string;
  rs86400?: string;
  shoppingBag?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  image,
  peacockChandbaliHoopEarri,
  rs86400,
  shoppingBag,
}) => {
  return (
    <div className={[styles.imageParent, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <i className={styles.peacockChandbaliHoop}>
          {peacockChandbaliHoopEarri}
        </i>
        <div className={styles.price}>
          <i className={styles.rs86400}>{rs86400}</i>
        </div>
      </div>
      <div className={styles.addToCart}>
        <div className={styles.button} />
        <img
          className={styles.shoppingBagIcon}
          loading="lazy"
          alt=""
          src={shoppingBag}
        />
      </div>
    </div>
  );
};

export default GroupComponent2;
