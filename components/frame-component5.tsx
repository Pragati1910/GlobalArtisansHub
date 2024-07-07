import type { NextPage } from "next";
import Input from "./input";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.heroContentWrapper, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroContentInner}>
          <div className={styles.discoverAWorldOfUniqueHaParent}>
            <h1 className={styles.discoverAWorld}>
              Discover a world of unique, handcrafted treasures from artisans
              across the globe at Global Artisans Hub. Our inclusive marketplace
              celebrates diversity, sustainability, and the timeless beauty of
              artisanal craftsmanship.
            </h1>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Contact Form</h1>
            </div>
          </div>
        </div>
        <div className={styles.heroSearchForm}>
          <img
            className={styles.heroSearchInputWrapper}
            loading="lazy"
            alt=""
            src="/frame-427318948.svg"
          />
          <form className={styles.rowParent}>
            <div className={styles.row}>
              <Input title="Name" textPlaceholder="Enter your name" />
            </div>
            <Input
              title="Email"
              textPlaceholder="Enter your email address"
              propFlex="unset"
              propOverflow="unset"
              propAlignSelf="stretch"
            />
            <div className={styles.row1}>
              <div className={styles.input}>
                <div className={styles.title1}>Subject</div>
                <div className={styles.textfield}>
                  <div className={styles.text}>
                    Enter the subject of your message
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroSearchInputFields}>
              <div className={styles.title2}>Message</div>
              <input className={styles.textfield1} type="text" />
            </div>
            <div className={styles.heroSearchInputFields1}>
              <button className={styles.seconday}>
                <div className={styles.title3}>Clear Form</div>
              </button>
              <button className={styles.primary}>
                <div className={styles.title4}>Submit</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
