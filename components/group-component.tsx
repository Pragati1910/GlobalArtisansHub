import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
  image?: string;
  peacockChandbaliHoopEarri?: string;
  rs86400?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  image,
  peacockChandbaliHoopEarri,
  rs86400,
}) => {
  return (
    <div className={[styles.imageParent, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.addToCart}>
        <img className={styles.buttonIcon} />
      </div>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <i className={styles.peacockChandbaliHoop}>
          {peacockChandbaliHoopEarri}
        </i>
        <div className={styles.price}>
          <i className={styles.rs86400}>{rs86400}</i>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
