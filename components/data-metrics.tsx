import type { NextPage } from "next";
import styles from "./data-metrics.module.css";

export type DataMetricsType = {
  className?: string;
};

const DataMetrics: NextPage<DataMetricsType> = ({ className = "" }) => {
  return (
    <div className={[styles.dataMetrics, className].join(" ")}>
      <img className={styles.dataIcons} loading="lazy" alt="" />
      <div className={styles.dataContent}>
        <div className={styles.dataChart}>
          <div className={styles.container}>
            <div className={styles.title}>Community Engagement</div>
            <div className={styles.yAxis}>Frequency</div>
            <img
              className={styles.graphIcon}
              loading="lazy"
              alt=""
              src="/graph.svg"
            />
            <div className={styles.xAxis}>Program Type</div>
          </div>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <h1 className={styles.title1}>Community Engagement Programs</h1>
              <div className={styles.description}>
                Engage with the community through workshops, webinars, and
                educational events focusing on artisanal craftsmanship and
                sustainable practices.
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.row}>
                <div className={styles.metric}>
                  <div className={styles.title2}>Workshops</div>
                  <div className={styles.data}>10</div>
                  <div className={styles.change}>Monthly</div>
                </div>
                <div className={styles.metric1}>
                  <div className={styles.title3}>Webinars</div>
                  <div className={styles.data1}>5</div>
                  <div className={styles.change1}>Bi-weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.dataIcons1}
        loading="lazy"
        alt=""
        src="/vector-200-6.svg"
      />
    </div>
  );
};

export default DataMetrics;
