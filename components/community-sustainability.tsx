import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./community-sustainability.module.css";

export type CommunitySustainabilityType = {
  className?: string;
};

const CommunitySustainability: NextPage<CommunitySustainabilityType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.communitySustainability, className].join(" ")}>
      <FrameComponent1
        empowerment="Community"
        weBelieveInThePowerOfHand="At the heart of our work is a dedication to building a supportive and inclusive community. We celebrate diversity and foster connections between artisans and customers, creating a space where stories are shared, and cultures are appreciated. Through collaboration and mutual respect, we aim to inspire and uplift everyone involved in our journey."
        empowermentImage="/rectangle-4138-1@2x.png"
        propAlignSelf="unset"
        propGap="46px"
        propFlex="1"
      />
    </div>
  );
};

export default CommunitySustainability;
