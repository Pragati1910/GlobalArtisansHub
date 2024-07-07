import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./newsletter.module.css";

export type NewsletterType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const Newsletter: NextPage<NewsletterType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
}) => {
  const newsletterStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      padding: propPadding,
    };
  }, [propFlex, propMinWidth, propWidth, propPadding]);

  return (
    <div
      className={[styles.newsletter, className].join(" ")}
      style={newsletterStyle}
    >
      <div className={styles.newsletterContainer}>
        <div className={styles.toHearMore}>
          TO HEAR MORE FROM THESE GREAT ARTISANS
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.emailInputContainer}>
          <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
        </div>
        <button className={styles.subscribeWrapper}>
          <div className={styles.subscribe}>SUBSCRIBE</div>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
