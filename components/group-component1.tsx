import type { NextPage } from "next";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
  image?: string;
  peacockChandbaliHoopEarri?: string;
  rs86400?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  image,
  peacockChandbaliHoopEarri,
  rs86400,
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
      <img className={styles.addToCart} />
    </div>
  );
};

export default GroupComponent1;
