import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  empowerment?: string;
  weBelieveInThePowerOfHand?: string;
  empowermentImage?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  empowerment,
  weBelieveInThePowerOfHand,
  empowermentImage,
  propAlignSelf,
  propGap,
  propFlex,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      flex: propFlex,
    };
  }, [propAlignSelf, propGap, propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.empowermentContent}>
        <div className={styles.empowermentDetails}>
          <div className={styles.empowermentWrapper}>
            <h1 className={styles.empowerment}>{empowerment}</h1>
          </div>
          <div className={styles.weBelieveIn}>{weBelieveInThePowerOfHand}</div>
        </div>
      </div>
      <img
        className={styles.empowermentImageIcon}
        loading="lazy"
        alt=""
        src={empowermentImage}
      />
    </div>
  );
};

export default FrameComponent1;
