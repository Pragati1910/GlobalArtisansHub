import type { NextPage } from "next";
import styles from "./get-involved-button.module.css";

export type GetInvolvedButtonType = {
  className?: string;
};

const GetInvolvedButton: NextPage<GetInvolvedButtonType> = ({
  className = "",
}) => {
  const handleButtonClick = () => {
    window.location.href = "/get-involved"; // Navigate to get-involved page
  };

  return (
    <div className={[styles.getInvolvedButton, className].join(" ")}>
      <button className={styles.frameParent} onClick={handleButtonClick}>
        <div className={styles.getInvolvedWrapper}>
          <div className={styles.getInvolved}>JOIN US NOW</div>
        </div>
        <img
          className={styles.arrowRightAltIcon}
          alt=""
          src="/arrow-right-alt.svg"
        />
      </button>
      <div className={styles.footerDivider}>
        <img
          className={styles.footerDividerChild}
          loading="lazy"
          alt=""
          src="/rectangle-4154@2x.png"
        />
        <img
          className={styles.footerDividerItem}
          alt=""
          src="/rectangle-4155@2x.png"
        />
      </div>
    </div>
  );
};

export default GetInvolvedButton;
