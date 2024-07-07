import type { NextPage } from "next";
import styles from "./content-list.module.css";

export type ContentListType = {
  className?: string;
};

const ContentList: NextPage<ContentListType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentList, className].join(" ")}>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <img className={styles.listIcon} loading="lazy" alt="" />
          <div className={styles.listContent}>
            <div className={styles.frameParent}>
              <div className={styles.listTitleContainerWrapper}>
                <div className={styles.listTitleContainer}>
                  <h1 className={styles.title}>
                    Collaborations and Sponsorships
                  </h1>
                  <div className={styles.description}>
                    Explore opportunities to collaborate with businesses,
                    organizations, or sponsors to support artisanal goods and
                    social impact.
                  </div>
                </div>
              </div>
              <div className={styles.listActions}>
                <div className={styles.listActionContainer}>
                  <div className={styles.frame}>
                    <div className={styles.icon}>🤝</div>
                  </div>
                  <div className={styles.actionDetails}>
                    <div className={styles.titleParent}>
                      <div className={styles.title1}>Collaborations</div>
                      <div className={styles.subtitle}>
                        Partner with us on special projects or campaigns.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.actionIcons}
                  loading="lazy"
                  alt=""
                  src="/vector-200-2.svg"
                />
                <div className={styles.listActionContainerRight}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frame1}>
                      <div className={styles.icon1}>💼</div>
                    </div>
                  </div>
                  <div className={styles.actionDetailsRight}>
                    <div className={styles.title2}>Sponsorships</div>
                    <div className={styles.subtitle1}>
                      Support our initiatives and gain visibility through
                      sponsorship packages.
                    </div>
                  </div>
                </div>
                <img
                  className={styles.actionIcons1}
                  loading="lazy"
                  alt=""
                  src="/vector-200-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.nextItemIcon}
          loading="lazy"
          alt=""
          src="/vector-200-4.svg"
        />
      </div>
    </section>
  );
};

export default ContentList;
