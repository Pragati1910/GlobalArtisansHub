import type { NextPage } from "next";
import Content1 from "../components/content1";
import Hero from "../components/hero";
import Article from "../components/article";
import ContentList from "../components/content-list";
import FeaturedCard from "../components/featured-card";
import DataMetrics from "../components/data-metrics";
import FooterContent from "../components/footer-content";
import styles from "./get-involved.module.css";

const GetInvolved: NextPage = () => {
  return (
    <div className={styles.getInvolved}>
      <Content1 />
      <Hero />
      <section className={styles.vectorParent}>
        <img className={styles.frameChild} loading="lazy" alt="" />
        <div className={styles.frameWrapper}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>
              Volunteer and Support Opportunities
            </h1>
            <div className={styles.description}>
              Get involved as a volunteer and support our marketplace through
              events, marketing, or community outreach efforts.
            </div>
          </div>
        </div>
        <div className={styles.articlePreview}>
          <Article
            image="/image@2x.png"
            title="Volunteer Opportunities"
            subtitle="Assist in event setup, marketing campaigns, or community outreach initiatives."
          />
          <Article
            image="/image-1@2x.png"
            title="Contact Form"
            subtitle="Express your interest in volunteering with us."
          />
        </div>
      </section>
      <ContentList />
      <div className={styles.getInvolvedChild} />
      <FeaturedCard />
      <section className={styles.dataVisualization}>
        <DataMetrics />
        <div className={styles.lineParent}>
          <div className={styles.instanceChild} />
          <FooterContent />
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
