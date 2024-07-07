import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent5 from "../components/frame-component5";
import Item from "../components/item";
import PaymentSocial from "../components/payment-social";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  const router = useRouter();

  const onGlobalArtisansHubClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onARTISTSTextClick = useCallback(() => {
    router.push("/artists");
  }, [router]);

  const onSHOPTextClick = useCallback(() => {
    router.push("/main-shop");
  }, [router]);

  const onBLOGTextClick = useCallback(() => {
    router.push("/blogs");
  }, [router]);

  const onABOUTUSTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onFAQTextClick = useCallback(() => {
    router.push("/f-a-qs");
  }, [router]);

  const onCONTACTUSTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className={styles.contactUs}>
      <section className={styles.navbarParent}>
        <header className={styles.navbar}>
          <div className={styles.frameParent}>
            <div className={styles.globalArtisansHubParent}>
              <a
                className={styles.globalArtisansHub}
                onClick={onGlobalArtisansHubClick}
              >
                Global Artisans Hub
              </a>
              <div className={styles.frameWrapper}>
                <div className={styles.navbarShoppingcartIconParent}>
                  <input
                    className={styles.navbarShoppingcartIcon}
                    type="text"
                  />
                  <div className={styles.frameContainer}>
                    <div className={styles.shoppingBagParent}>
                      <img
                        className={styles.shoppingBagIcon}
                        loading="lazy"
                        alt=""
                        src="/shopping-bag.svg"
                      />
                      <img
                        className={styles.personIcon}
                        loading="lazy"
                        alt=""
                        src="/person.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
            <div className={styles.navbarLinks}>
              <div className={styles.navbarLinksDivider} />
              <nav className={styles.navbarLinksLabelsWrapper}>
                <nav className={styles.navbarLinksLabels}>
                  <div className={styles.navbarArtistsLink}>
                    <a className={styles.artists} onClick={onARTISTSTextClick}>
                      ARTISTS
                    </a>
                  </div>
                  <div className={styles.navbarShopLink}>
                    <a className={styles.shop} onClick={onSHOPTextClick}>
                      SHOP
                    </a>
                  </div>
                  <a className={styles.blog} onClick={onBLOGTextClick}>
                    BLOG
                  </a>
                  <a className={styles.aboutUs} onClick={onABOUTUSTextClick}>
                    ABOUT US
                  </a>
                </nav>
              </nav>
            </div>
          </div>
        </header>
        <FrameComponent5 />
      </section>
      <section className={styles.featuredContentParent}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredHeader}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Purpose of Contact</h1>
            </div>
            <div className={styles.list}>
              <Item icon="❓" title="General Inquiry" />
              <Item icon="💬" title="Customer Support" />
              <Item icon="🤝" title="Partnership Opportunities" />
              <Item icon="📰" title="Press Inquiries" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title1}>Response Time</h1>
            </div>
            <div className={styles.list1}>
              <div className={styles.row}>
                <div className={styles.article}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/image1@2x.png"
                    />
                  </div>
                  <div className={styles.subtitleWrapper}>
                    <div className={styles.subtitle}>
                      We aim to respond to inquiries within 24-48 hours. Thank
                      you for your patience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameChild} loading="lazy" alt="" />
      </section>
      <section className={styles.vectorParent}>
        <img className={styles.frameItem} loading="lazy" alt="" />
        <div className={styles.featuredArtistsContent}>
          <div className={styles.featuredArtistsHeader}>
            <div className={styles.titleFrame}>
              <h1 className={styles.title2}>Contact Information</h1>
            </div>
            <div className={styles.featuredArtistsArticles}>
              <div className={styles.article1}>
                <div className={styles.title3}>Customer Service Email</div>
                <div className={styles.subtitle1}>
                  globalartisanshub@gmail.com
                </div>
              </div>
              <div className={styles.featuredArtistsGrid}>
                <div className={styles.row1}>
                  <div className={styles.article2}>
                    <div className={styles.featuredArtistArticleConten}>
                      <div className={styles.title4}>Phone Number</div>
                      <div className={styles.subtitle2}>+91 8965727923</div>
                    </div>
                  </div>
                </div>
                <div className={styles.article3}>
                  <div className={styles.title5}>Social Media Profiles</div>
                  <div className={styles.articleInner}>
                    <div className={styles.socialIconsParent}>
                      <img
                        className={styles.socialIcons}
                        loading="lazy"
                        alt=""
                        src="/social-icons.svg"
                      />
                      <img
                        className={styles.socialIcons1}
                        loading="lazy"
                        alt=""
                        src="/social-icons-1.svg"
                      />
                      <img
                        className={styles.socialIcons2}
                        loading="lazy"
                        alt=""
                        src="/social-icons-2.svg"
                      />
                      <img
                        className={styles.socialIcons3}
                        loading="lazy"
                        alt=""
                        src="/social-icons-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footerDividerParent}>
        <div className={styles.footerDivider} />
        <div className={styles.footerContent}>
          <div className={styles.footerLinksColumnsParent}>
            <div className={styles.footerLinksColumns}>
              <div className={styles.footerLinksFirstColumn}>
                <div className={styles.footerLinksFirstColumnLabe}>
                  <a className={styles.artists1} onClick={onARTISTSTextClick}>
                    ARTISTS
                  </a>
                  <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
                </div>
                <div className={styles.footerLinksFirstColumnLabe1}>
                  <div className={styles.blog1} onClick={onBLOGTextClick}>
                    BLOG
                  </div>
                  <a
                    className={styles.termsConditions}
                  >{`TERMS & CONDITIONS`}</a>
                </div>
                <div className={styles.footerLinksSecondColumn}>
                  <div className={styles.footerLinksSecondColumnLabWrapper}>
                    <div className={styles.footerLinksSecondColumnLab}>
                      <a className={styles.faq} onClick={onFAQTextClick}>
                        FAQ
                      </a>
                      <div
                        className={styles.aboutUs1}
                        onClick={onABOUTUSTextClick}
                      >
                        ABOUT US
                      </div>
                      <div
                        className={styles.contactUs1}
                        onClick={onCONTACTUSTextClick}
                      >
                        CONTACT US
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerNewsletter}>
                    <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                    <div className={styles.returnPolicyWrapper}>
                      <div className={styles.returnPolicy}>RETURN POLICY</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newsletterSignUp}>
                <div className={styles.newsletterHeading}>
                  <div className={styles.toHearMore}>
                    TO HEAR MORE FROM THESE GREAT ARTISANS
                  </div>
                </div>
                <div className={styles.emailInput}>
                  <div className={styles.emailPrompt}>
                    <div className={styles.enterYourEmail}>
                      ENTER YOUR EMAIL
                    </div>
                  </div>
                  <button className={styles.subscribeWrapper}>
                    <div className={styles.subscribe}>SUBSCRIBE</div>
                  </button>
                </div>
              </div>
            </div>
            <PaymentSocial
              socialIcons="/social-icons.svg"
              socialIcons1="/social-icons-1.svg"
              socialIcons2="/social-icons-2.svg"
              socialIcons3="/social-icons-3.svg"
            />
          </div>
          <div className={styles.copyright}>
            <div
              className={styles.copyright2024}
            >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
