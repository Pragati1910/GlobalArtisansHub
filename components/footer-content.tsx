import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./footer-content.module.css";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  const router = useRouter();

  const onARTISTSTextClick = useCallback(() => {
    router.push("/artists");
  }, [router]);

  const onBLOGTextClick = useCallback(() => {
    router.push("/blogs");
  }, [router]);

  const onFAQTextClick = useCallback(() => {
    router.push("/f-a-qs");
  }, [router]);

  const onABOUTUSTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onCONTACTUSTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <footer className={styles.footerColumns}>
        <div className={styles.footerLinks}>
          <div className={styles.footerNavigation}>
            <div className={styles.pagesLinks}>
              <div className={styles.artists} onClick={onARTISTSTextClick}>
                ARTISTS
              </div>
              <div className={styles.privacyPolicy}>PRIVACY POLICY</div>
            </div>
            <div className={styles.pagesLinks1}>
              <div className={styles.blog} onClick={onBLOGTextClick}>
                BLOG
              </div>
              <div
                className={styles.termsConditions}
              >{`TERMS & CONDITIONS`}</div>
            </div>
            <div className={styles.infoLinks}>
              <div className={styles.infoList}>
                <div className={styles.infoItems}>
                  <div className={styles.faq} onClick={onFAQTextClick}>
                    FAQ
                  </div>
                  <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
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
            <div className={styles.toHearMoreFromTheseGreatWrapper}>
              <div className={styles.toHearMore}>
                TO HEAR MORE FROM THESE GREAT ARTISANS
              </div>
            </div>
            <div className={styles.emailInput}>
              <div className={styles.inputLabel}>
                <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
              </div>
              <button className={styles.subscribeWrapper}>
                <div className={styles.subscribe}>SUBSCRIBE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.paymentSocial}>
          <div className={styles.payment}>
            <div className={styles.weAcceptWrapper}>
              <div className={styles.weAccept}>WE ACCEPT</div>
            </div>
            <img
              className={styles.accept1Icon}
              loading="lazy"
              alt=""
              src="/accept-1@2x.png"
            />
          </div>
          <div className={styles.social}>
            <div className={styles.socialMediaWrapper}>
              <div className={styles.socialMedia}>SOCIAL MEDIA</div>
            </div>
            <div className={styles.socialIcons}>
              <img
                className={styles.socialIcons1}
                loading="lazy"
                alt=""
                src="/social-icons1.svg"
              />
              <img
                className={styles.socialIcons2}
                loading="lazy"
                alt=""
                src="/social-icons-12.svg"
              />
              <img
                className={styles.socialIcons3}
                loading="lazy"
                alt=""
                src="/social-icons-22.svg"
              />
              <img
                className={styles.socialIcons4}
                loading="lazy"
                alt=""
                src="/social-icons-32.svg"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright2024GlobalartisanWrapper}>
        <div
          className={styles.copyright2024}
        >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
      </div>
    </div>
  );
};

export default FooterContent;
