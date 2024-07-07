import type { NextPage } from "next";
import styles from "./f-a-q-items.module.css";

export type FAQItemsType = {
  className?: string;
};

const FAQItems: NextPage<FAQItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.fAQItems, className].join(" ")}>
      <div className={styles.fAQItemsListParent}>
        <div className={styles.fAQItemsList}>
          <div className={styles.fAQItem}>
            <div className={styles.fAQItemContent}>
              <div className={styles.howCanIContainer}>
                <p className={styles.howCanIContactCustomerSup}>
                  <i className={styles.howCanI}>
                    How can I contact customer support for assistance?
                  </i>
                </p>
                <p className={styles.ourCustomerSupportTeamIsH}>
                  <i className={styles.ourCustomerSupport}>
                    Our customer support team is here to help! You can reach us
                    via email at support@GlobalArtisansHub.com, or call us at
                    8976524935.
                  </i>
                </p>
              </div>
            </div>
            <div className={styles.howCanIPlaceAnOrderOnGlWrapper}>
              <div className={styles.howCanIContainer1}>
                <p className={styles.howCanIPlaceAnOrderOnGl}>
                  <i className={styles.howCanI1}>
                    How can I place an order on Global Artisans Hub?
                  </i>
                </p>
                <p className={styles.toPlaceAnOrderSimplyBrow}>
                  <i className={styles.toPlaceAn}>
                    To place an order, simply browse our collection of artisanal
                    goods, add your desired items to the cart, and proceed to
                    checkout. You can pay securely using various payment methods
                    such as credit cards, UPI, and more.
                  </i>
                </p>
              </div>
            </div>
            <div className={styles.whatAreTheContainer}>
              <p className={styles.whatAreTheShippingOptions}>
                <i className={styles.whatAreThe}>
                  What are the shipping options and how long does delivery take?
                </i>
              </p>
              <p className={styles.weOfferStandardAndExpress}>
                <i className={styles.weOfferStandard}>
                  We offer standard and express shipping options. Delivery times
                  vary depending on your location and the shipping method
                  selected. Standard shipping typically takes 5-10 business
                  days, while express shipping is faster
                </i>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.whatIsYourReturnPolicyWeParent}>
          <div className={styles.whatIsYourContainer}>
            <p className={styles.whatIsYourReturnPolicy}>
              <i className={styles.whatIsYour}>What is your return policy?</i>
            </p>
            <p className={styles.weWantYouToBeCompletelyS}>
              <i className={styles.weWantYou}>
                We want you to be completely satisfied with your purchase. If
                you’re not happy with your order, you can return it within 30
                days of delivery for a full refund or exchange. Please ensure
                that items are returned in their original condition.
              </i>
            </p>
          </div>
          <div className={styles.howDoIContainer}>
            <p className={styles.howDoIBecomeAnArtisanPar}>
              <i className={styles.howDoI}>
                How do I become an artisan partner with Global Artisans Hub?
              </i>
            </p>
            <p className={styles.ifYouAreAnArtisanInterest}>
              <i className={styles.ifYouAre}>
                If you are an artisan interested in joining our marketplace,
                please visit our "Get Involved" page for details on the
                application process and criteria. We welcome artisans who align
                with our mission of promoting sustainability and fair trade.
              </i>
            </p>
          </div>
          <div className={styles.whatIsGlobalContainer}>
            <p className={styles.whatIsGlobalArtisansHubA}>
              <i className={styles.whatIsGlobal}>
                What is Global Artisans Hub and how does it support artisans?
              </i>
            </p>
            <p className={styles.globalArtisansHubIsAPlat}>
              <i className={styles.globalArtisans}>
                Global Artisans Hub is a platform that connects consumers with
                artisans from around the world, promoting fair trade practices
                and supporting sustainable livelihoods. We empower artisans by
                providing them with a global market to showcase and sell their
                handcrafted goods.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItems;
