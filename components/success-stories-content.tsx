import type { NextPage } from "next";
import styles from "./success-stories-content.module.css";

export type SuccessStoriesContentType = {
  className?: string;
};

const SuccessStoriesContent: NextPage<SuccessStoriesContentType> = ({
  className = "",
}) => {
  const handleJoinUsNowClick = () => {
    window.location.href = "/get-involved"; // Navigate to get-involved page
  };

  return (
    <section className={[styles.successStoriesContent, className].join(" ")}>
      <div className={styles.successStoriesDescriptionCo}>
        <h1
          className={styles.hearAboutThese}
        >{`Hear about these women and their lives `}</h1>
        <div className={styles.successStoriesLinkContainer}>
          <div className={styles.iconarrowRightParent}>
            <img
              className={styles.iconarrowRight}
              loading="lazy"
              alt=""
              src="/iconarrowright2.svg"
            />
            <h3 className={styles.moreArticles}>Hear More</h3>
            <div className={styles.successStoriesLinkSeparator} />
          </div>
        </div>
      </div>
      <div className={styles.featuredArticlesBackgroundParent}>
        <img
          className={styles.featuredArticlesBackground}
          loading="lazy"
          alt=""
          src="/rectangle-4156@2x.png"
        />
        <div className={styles.featuredArticlesContainer}>
          <div className={styles.featuredArticles}>
            <div className={styles.row6}>
              <div className={styles.article}>
                <img
                  className={styles.imgContainerIcon}
                  loading="lazy"
                  alt=""
                  src="/img-container1@2x.png"
                />
                <div className={styles.info}>
                  <i className={styles.throughMyIntricate}>
                    Through my intricate beadwork, I can share the vibrant
                    culture of my community with the world.
                  </i>
                </div>
              </div>
              <div className={styles.article1}>
                <img
                  className={styles.imgContainerIcon1}
                  loading="lazy"
                  alt=""
                  src="/img-container-11@2x.png"
                />
                <div className={styles.info1}>
                  <i className={styles.creatingTheseBeautiful}>
                    Creating these beautiful bags has allowed me to support my
                    family and preserve our traditional craftsmanship.
                  </i>
                </div>
              </div>
              <div className={styles.article2}>
                <img
                  className={styles.imgContainerIcon2}
                  loading="lazy"
                  alt=""
                  src="/img-container-21@2x.png"
                />
                <div className={styles.info2}>
                  <i className={styles.theCulturalTapestry}>
                    The Cultural Tapestry: Exploring the Diverse Traditions
                    Behind Our Handcrafted Products
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.articleNavigation}>
            <div className={styles.navigationContainer}>
              <div className={styles.frameParent}>
                <div className={styles.getInvolvedButtonParent}>
                  <div className={styles.getInvolvedButton}>
                    <div className={styles.getInvolvedButtonContainer}>
                      <h2 className={styles.getInvolved}>Get Involved</h2>
                      <div className={styles.getInvolvedDivider} />
                    </div>
                  </div>
                  <div className={styles.joinUsIn}>
                    Join us in our mission to empower women artisans and
                    celebrate their incredible craftsmanship. There are many
                    ways you can get involved and make a difference.
                  </div>
                </div>
                <div className={styles.involvedButtonWrapper}>
                  <button className={styles.frameGroup} onClick={handleJoinUsNowClick}>
                    <div className={styles.getInvolvedWrapper}>
                      <div className={styles.getInvolved1}>JOIN US NOW</div>
                    </div>
                    <img
                      className={styles.arrowRightAltIcon}
                      alt=""
                      src="/arrow-right-alt1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.imageDecorations}>
              <img
                className={styles.imageDecorationOne}
                loading="lazy"
                alt=""
                src="/rectangle-4154@2x.png"
              />
              <img
                className={styles.imageDecorationTwo}
                alt=""
                src="/rectangle-4155@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesContent;
