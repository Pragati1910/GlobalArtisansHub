import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./empowerment-container.module.css";

export type EmpowermentContainerType = {
  className?: string;
  empowerment?: string;
  weBelieveInThePowerOfHand?: string;
  ourSuccessImage?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const EmpowermentContainer: NextPage<EmpowermentContainerType> = ({
  className = "",
  empowerment,
  weBelieveInThePowerOfHand,
  ourSuccessImage,
  propFlex,
  propGap,
  propAlignSelf,
}) => {
  const empowermentContainerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propAlignSelf]);

  return (
    <div
      className={[styles.empowermentContainer, className].join(" ")}
      style={empowermentContainerStyle}
    >
      <div className={styles.empowermentContainerChild} />
      <div className={styles.empowermentContent}>
        <div className={styles.empowermentTitleContainer}>
          <div className={styles.empowermentWrapper}>
            <h1 className={styles.empowerment}>{empowerment}</h1>
          </div>
          <div className={styles.weBelieveIn}>{weBelieveInThePowerOfHand}</div>
        </div>
      </div>
      <img
        className={styles.ourSuccessImage}
        loading="lazy"
        alt=""
        src={ourSuccessImage}
      />
    </div>
  );
};

export default EmpowermentContainer;
