import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FAQItems from "../components/f-a-q-items";
import PaymentSocial from "../components/payment-social";
import styles from "./f-a-qs.module.css";

const FAQs: NextPage = () => {
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
    <div className={styles.faqs}>
      <header className={styles.navbar}>
        <div className={styles.headerWrapperParent}>
          <div className={styles.headerWrapper}>
            <a
              className={styles.globalArtisansHub}
              onClick={onGlobalArtisansHubClick}
            >
              Global Artisans Hub
            </a>
            <div className={styles.headerActions}>
              <div className={styles.shoppingBagWrapper}>
                <input className={styles.shoppingBagBackground} type="text" />
                <div className={styles.shoppingBagIcon}>
                  <div className={styles.shoppingBagPersonIcon}>
                    <img
                      className={styles.shoppingBagIcon1}
                      loading="lazy"
                      alt=""
                      src="/shopping-bag1.svg"
                    />
                    <img
                      className={styles.personIcon}
                      loading="lazy"
                      alt=""
                      src="/person1.svg"
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
            src="/search1.svg"
          />
          <div className={styles.navigationLinks}>
            <div className={styles.navigationLinksDivider} />
            <nav className={styles.navigationLinksWrapper}>
              <nav className={styles.artistsLinkParent}>
                <div className={styles.artistsLink}>
                  <a className={styles.artists} onClick={onARTISTSTextClick}>
                    ARTISTS
                  </a>
                </div>
                <div className={styles.shopLink}>
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
      <section className={styles.content}>
        <div className={styles.fAQTitleWrapperParent}>
          <div className={styles.fAQTitleWrapper}>
            <i className={styles.frequentlyAskedQuestionsContainer}>
              <p className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.needHelpWith}>
                Need help with something? Here are our most frequently asked
                questions.
              </p>
            </i>
          </div>
          <FAQItems />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.contactPrompt}>
              <h1 className={styles.stillHaveQuestionsContainer}>
                <p className={styles.stillHaveQuestions}>
                  Still have questions?
                </p>
              </h1>
              <h2 className={styles.cantFindAnswers}>
                Can’t find answers you’re looking for? Please chat to out team
              </h2>
            </div>
            <div className={styles.contactButton}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.getInTouch}>Get in Touch</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerDividerParent}>
        <div className={styles.footerDivider} />
        <div className={styles.footerContent}>
          <footer className={styles.footerNavigation}>
            <div className={styles.frameParent}>
              <div className={styles.artistsParent}>
                <a className={styles.artists1} onClick={onARTISTSTextClick}>
                  ARTISTS
                </a>
                <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
              </div>
              <div className={styles.blogParent}>
                <div className={styles.blog1} onClick={onBLOGTextClick}>
                  BLOG
                </div>
                <a className={styles.termsConditions}>{`TERMS & CONDITIONS`}</a>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.faqParent}>
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
                      className={styles.contactUs}
                      onClick={onCONTACTUSTextClick}
                    >
                      CONTACT US
                    </div>
                  </div>
                </div>
                <div className={styles.shippingPolicyParent}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                  <div className={styles.returnPolicy}>
                    <div className={styles.returnPolicy1}>RETURN POLICY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletterContent}>
                <div className={styles.toHearMore}>
                  TO HEAR MORE FROM THESE GREAT ARTISANS
                </div>
              </div>
              <div className={styles.newsletterForm}>
                <div className={styles.newsletterInput}>
                  <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
                </div>
                <button className={styles.subscribeWrapper}>
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                </button>
              </div>
            </div>
            <PaymentSocial
              socialIcons="/social-icons1.svg"
              socialIcons1="/social-icons-12.svg"
              socialIcons2="/social-icons-22.svg"
              socialIcons3="/social-icons-32.svg"
            />
          </footer>
          <div className={styles.copyright}>
            <div
              className={styles.copyright2024}
            >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
