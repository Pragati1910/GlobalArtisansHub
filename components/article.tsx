import type { NextPage } from "next";
import styles from "./article.module.css";

export type ArticleType = {
  className?: string;
  image?: string;
  title?: string;
  subtitle?: string;
};

const Article: NextPage<ArticleType> = ({
  className = "",
  image,
  title,
  subtitle,
}) => {
  return (
    <div className={[styles.article, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.articleCaption}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default Article;
