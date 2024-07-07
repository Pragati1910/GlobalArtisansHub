import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./input.module.css";

export type InputType = {
  className?: string;
  title?: string;
  textPlaceholder?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Input: NextPage<InputType> = ({
  className = "",
  title,
  textPlaceholder,
  propFlex,
  propOverflow,
  propAlignSelf,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      overflow: propOverflow,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propOverflow, propAlignSelf]);

  return (
    <div className={[styles.input, className].join(" ")} style={inputStyle}>
      <div className={styles.title}>{title}</div>
      <div className={styles.textfield}>
        <input
          className={styles.text}
          placeholder={textPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
