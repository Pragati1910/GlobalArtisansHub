import type { NextPage } from "next";
import styles from "./articles.module.css";

export type ArticlesType = {
  className?: string;
};

const Articles: NextPage<ArticlesType> = ({ className = "" }) => {
  return (
    <section className={[styles.articles, className].join(" ")}>
      <div className={styles.articlesContent}>
        <div className={styles.articlesHeader}>
          <div className={styles.whatWeDoWrapper}>
            <div className={styles.whatWeDo}>
              <div className={styles.whatWeDoContainer}>
                <h1 className={styles.whatWeDo1}>What We Do</h1>
              </div>
              <div className={styles.whatWeDoChild} />
            </div>
          </div>
          <div className={styles.moreArticlesParent}>
            <div className={styles.moreArticles}>
              <div className={styles.moreArticles1}>Explore more</div>
              <img
                className={styles.iconarrowRight}
                loading="lazy"
                alt=""
                src="/iconarrowright1.svg"
              />
            </div>
            <div className={styles.instanceChild} />
          </div>
        </div>
        <div className={styles.articlePreviews}>
          <img
            className={styles.articlePreviewsChild}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <img
            className={styles.articlePreviewsItem}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <img
            className={styles.articlePreviewsInner}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <img
            className={styles.articlePreviewsChild1}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
          <img
            className={styles.articlePreviewsChild2}
            loading="lazy"
            alt=""
            src="/group-8@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
