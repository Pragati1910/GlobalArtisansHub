import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  categoryIcon?: string;
  jewellery?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  categoryIcon,
  jewellery,
  propWidth,
  propMinWidth,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  return (
    <div
      className={[styles.categoryIconParent, className].join(" ")}
      style={frameDivStyle}
    >
      <img className={styles.categoryIcon} alt="" src={categoryIcon} />
      <div className={styles.categoryBackground} />
      <b className={styles.jewellery}>{jewellery}</b>
      <img
        className={styles.northEastIcon}
        loading="lazy"
        alt=""
        src="/north-east.svg"
      />
    </div>
  );
};

export default FrameComponent2;
