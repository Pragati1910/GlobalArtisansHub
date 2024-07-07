import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
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
    <footer className={[styles.linksDividerParent, className].join(" ")}>
      <div className={styles.linksDivider}>
        <div className={styles.linksTopDivider} />
      </div>
      <div className={styles.linksContent}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.artistsParent}>
              <a className={styles.artists} onClick={onARTISTSTextClick}>
                ARTISTS
              </a>
              <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.blogParent}>
                <a className={styles.blog} onClick={onBLOGTextClick}>
                  BLOG
                </a>
                <a className={styles.faq} onClick={onFAQTextClick}>
                  FAQ
                </a>
                <a className={styles.aboutUs} onClick={onABOUTUSTextClick}>
                  ABOUT US
                </a>
                <div
                  className={styles.contactUs}
                  onClick={onCONTACTUSTextClick}
                >
                  CONTACT US
                </div>
              </div>
              <div className={styles.termsConditionsParent}>
                <a className={styles.termsConditions}>{`TERMS & CONDITIONS`}</a>
                <div className={styles.shippingPolicyWrapper}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                </div>
                <div className={styles.returnPolicyWrapper}>
                  <div className={styles.returnPolicy}>RETURN POLICY</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newsletterSignup}>
            <div className={styles.signupHeader}>
              <div className={styles.toHearMore}>
                TO HEAR MORE FROM THESE GREAT ARTISANS
              </div>
            </div>
            <div className={styles.signupForm}>
              <div className={styles.emailInput}>
                <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
              </div>
              <button className={styles.subscribeWrapper}>
                <div className={styles.subscribe}>SUBSCRIBE</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.paymentSocial}>
          <div className={styles.paymentInfo}>
            <div className={styles.weAccept}>WE ACCEPT</div>
          </div>
          <div className={styles.paymentIcons}>
            <img
              className={styles.accept1Icon}
              loading="lazy"
              alt=""
              src="/accept-1@2x.png"
            />
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaInfo}>
              <div className={styles.socialMediaTitle}>
                <div className={styles.socialMedia1}>SOCIAL MEDIA</div>
              </div>
              <div className={styles.socialMediaIcons}>
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
                  src="/social-icons-11.svg"
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
      <div className={styles.copyright}>
        <div
          className={styles.copyright2024}
        >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
      </div>
    </footer>
  );
};

export default FrameComponent;
