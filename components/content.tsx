import type { NextPage } from "next";
import GroupComponent2 from "./group-component2";
import GroupComponent1 from "./group-component1";
import GroupComponent from "./group-component";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.instanceParent}>
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon}
            loading="lazy"
            alt=""
            src="/rectangle-4150@2x.png"
          />
          <div className={styles.emptyParent}>
            <div className={styles.empty} />
            <div className={styles.empty1} />
            <div className={styles.socialMedia} />
          </div>
        </div>
        <div className={styles.jewelryItemsParent}>
          <div className={styles.jewelryItems}>
            <div className={styles.handcraftedJewellery}>
              Handcrafted Jewellery
            </div>
            <div className={styles.jewelryItemsInner}>
              <div className={styles.frameParent}>
                <div className={styles.moreArticlesParent}>
                  <a className={styles.moreArticles}>Explore more</a>
                  <img
                    className={styles.iconarrowRight}
                    alt=""
                    src="/iconarrowright2.svg"
                  />
                </div>
                <div className={styles.separator} />
              </div>
            </div>
          </div>
          <div className={styles.productRow}>
            <GroupComponent2
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
              shoppingBag="/shopping-bag-1.svg"
            />
            <GroupComponent1
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
            />
            <GroupComponent1
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/image@2x.png"
              peacockChandbaliHoopEarri="Peacock Chandbali Hoop Earrings with Ghungroo"
              rs86400="Rs. 864.00"
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.textilesApparelsParent}>
            <div
              className={styles.textilesApparels}
            >{`Textiles & Apparels`}</div>
            <div className={styles.instanceWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.moreArticlesGroup}>
                  <a className={styles.moreArticles1}>Explore more</a>
                  <img
                    className={styles.iconarrowRight1}
                    alt=""
                    src="/iconarrowright2.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
            </div>
          </div>
          <div className={styles.instanceGroup}>
            <GroupComponent2
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
              shoppingBag="/shopping-bag.svg"
            />
            <GroupComponent1
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
            />
            <GroupComponent1
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
            />
            <GroupComponent
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
            />
            <GroupComponent
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
            />
            <GroupComponent
              image="/rectangle-4144-6@2x.png"
              peacockChandbaliHoopEarri="Vanilla White Golden Zari Kanjeevaram Silk Saree"
              rs86400="Rs. 2,879.00"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
