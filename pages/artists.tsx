import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import Newsletter from "../components/newsletter";
import styles from "./artists.module.css";

const Artists: NextPage = () => {
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
    <div className={styles.artists}>
      <FrameComponent4 />
      <section className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroDetails}>
              <div className={styles.avatarWrapper}>
                <img
                  className={styles.avatarIcon}
                  loading="lazy"
                  alt=""
                  src="/avatar1@2x.png"
                />
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.profileTitle}>
                  <h3 className={styles.title}>Artisan Name</h3>
                </div>
                <div className={styles.profileLabel}>
                  <div className={styles.labelNormal}>
                    <div className={styles.labelText}>Craftswoman</div>
                  </div>
                  <div className={styles.labelNormal1}>
                    <div className={styles.labelText1}>Heritage Artisan</div>
                  </div>
                </div>
                <div className={styles.description}>
                  Crafting stories with cultural essence
                </div>
              </div>
            </div>
            <div className={styles.heroTitle}>
              <button className={styles.primary}>
                <a className={styles.title1}>Learn More</a>
              </button>
            </div>
            <div className={styles.heroTitle1}>
              <button className={styles.primary1}>
                <div className={styles.title2}>Sponsor</div>
              </button>
            </div>
            <div className={styles.callToAction}>
              <button className={styles.primary2}>
                <div className={styles.title3}>Partner With</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapperWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title4}>Meet the Artisan</h1>
            </div>
            <div className={styles.description1}>
              Explore the artisan's inspiring journey and unique craftsmanship
            </div>
          </div>
        </div>
        <div className={styles.featured}>
          <div className={styles.featuredContent}>
            <div className={styles.article}>
              <img
                className={styles.imageContainerIcon}
                loading="lazy"
                alt=""
                src="/image-container@2x.png"
              />
              <div className={styles.articleDetails}>
                <div className={styles.title5}>Craftsmanship at its Finest</div>
                <div className={styles.subtitle}>
                  Discover the artisan's dedication to preserving cultural
                  heritage through handcrafted goods
                </div>
              </div>
            </div>
            <div className={styles.article1}>
              <img
                className={styles.imageContainerIcon1}
                loading="lazy"
                alt=""
                src="/image-container-1@2x.png"
              />
              <div className={styles.titleParent}>
                <div className={styles.title6}>Heritage Inspiration</div>
                <div className={styles.subtitle1}>Rooted in Tradition</div>
                <div className={styles.subtitle2}>
                  Uncover the influences that shape the artisan's intricate
                  designs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.highlights}>
          <div className={styles.highlightItem}>
            <div className={styles.highlightDetails}>
              <h1 className={styles.title7}>Portfolio of Products</h1>
            </div>
            <div className={styles.description2}>
              Browse through a curated selection of exquisite handcrafted goods
            </div>
            <div className={styles.highlightAction}>
              <button className={styles.primary3}>
                <div className={styles.title8}>View Collection</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.row}>
            <div className={styles.card}>
              <img
                className={styles.imageContainerIcon2}
                loading="lazy"
                alt=""
                src="/image-container-2@2x.png"
              />
              <div className={styles.cardDetails}>
                <div className={styles.title9}>Artisan Basket</div>
                <div className={styles.subtitle3}>Price: Rs 500.00</div>
              </div>
            </div>
            <div className={styles.card1}>
              <img
                className={styles.imageContainerIcon3}
                loading="lazy"
                alt=""
                src="/image-container-3@2x.png"
              />
              <div className={styles.titleGroup}>
                <div className={styles.title10}>Ceramic Vase</div>
                <div className={styles.subtitle4}>Price: Rs 8000.00</div>
              </div>
            </div>
            <div className={styles.card2}>
              <img
                className={styles.imageContainerIcon4}
                loading="lazy"
                alt=""
                src="/image-container-4@2x.png"
              />
              <div className={styles.titleContainer}>
                <div className={styles.title11}>Handcrafted Scarf</div>
                <div className={styles.subtitle5}>Price: Rs 3000.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionContentParent}>
          <div className={styles.actionContent}>
            <h1 className={styles.title12}>Latest Posts</h1>
          </div>
          <img className={styles.actionIcon} loading="lazy" alt="" />
        </div>
      </section>
      <section className={styles.posts}>
        <div className={styles.postList}>
          <div className={styles.post}>
            <div className={styles.postContent}>
              <div className={styles.postHeader}>
                <div className={styles.authorInfo}>
                  <div className={styles.avatar} />
                </div>
                <div className={styles.authorDetails}>
                  <div className={styles.title13}>ArtisanCrafts</div>
                  <div className={styles.subtitle6}>1h ago - Workshop</div>
                </div>
                <div className={styles.postActions}>
                  <div className={styles.icon}>•••</div>
                </div>
              </div>
            </div>
            <img
              className={styles.imageContainerIcon5}
              loading="lazy"
              alt=""
              src="/image-container-5@2x.png"
            />
            <div className={styles.postFooter}>
              <div className={styles.postMeta}>
                <div className={styles.title14}>
                  Today's creation reflects the spirit of our cultural heritage
                </div>
                <div className={styles.labelNormal2}>
                  <div className={styles.labelText2}>Artisanal Process</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post1}>
            <div className={styles.postInner}>
              <div className={styles.frameParent}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatar1} />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.title15}>ArtisanCrafts</div>
                  <div className={styles.subtitle7}>1h ago - Workshop</div>
                </div>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon1}>•••</div>
                </div>
              </div>
            </div>
            <img
              className={styles.imageContainerIcon6}
              loading="lazy"
              alt=""
              src="/image-container-6@2x.png"
            />
            <div className={styles.postChild}>
              <div className={styles.titleParent1}>
                <div className={styles.title16}>
                  Today's creation reflects the spirit of our cultural heritage
                </div>
                <div className={styles.labelNormal3}>
                  <div className={styles.labelText3}>Artisanal Process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <h1 className={styles.title17}>Interact With More Such Artists</h1>
            <div className={styles.moreLink}>
              <div className={styles.linkWrapperParent}>
                <div className={styles.linkWrapper}>
                  <a className={styles.moreArticles}>Explore more</a>
                  <img
                    className={styles.iconarrowRight}
                    loading="lazy"
                    alt=""
                    src="/iconarrowright3.svg"
                  />
                </div>
                <div className={styles.footerDivider} />
              </div>
            </div>
          </div>
          <div className={styles.categoriesWrapper}>
            <div className={styles.categories}>
              <div className={styles.categoryImageParent}>
                <img
                  className={styles.categoryImageIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144@2x.png"
                />
                <div className={styles.categoryName}>
                  <div className={styles.categoryBackground} />
                  <b className={styles.jewellery}>Maria Hernandez</b>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.instanceChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144-1@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild} />
                  <b className={styles.jewellery1}>Aisha Patel</b>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.instanceItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144-2@2x.png"
                />
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameItem} />
                  <b className={styles.jewellery2}>Sofia Garcia</b>
                </div>
              </div>
              <div className={styles.rectangleDiv}>
                <img
                  className={styles.instanceInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144-3@2x.png"
                />
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameInner} />
                  <b className={styles.jewellery3}>Elena Rodriguez</b>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144-4@2x.png"
                />
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild1} />
                  <b className={styles.jewellery4}>Fatima Ali</b>
                </div>
              </div>
              <div className={styles.rectangleParent5}>
                <img
                  className={styles.instanceChild1}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4144-5@2x.png"
                />
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild2} />
                  <b className={styles.jewellery5}>Ananya Kapoor</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footerTopBorderParent}>
        <div className={styles.footerTopBorder} />
        <div className={styles.footerContent1}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumnOne}>
              <div className={styles.siteLinks}>
                <a className={styles.artists1} onClick={onARTISTSTextClick}>
                  ARTISTS
                </a>
                <div className={styles.blog} onClick={onBLOGTextClick}>
                  BLOG
                </div>
                <a className={styles.faq} onClick={onFAQTextClick}>
                  FAQ
                </a>
                <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
                  ABOUT US
                </div>
              </div>
              <div className={styles.policyLinks}>
                <div className={styles.policyList}>
                  <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
                </div>
                <a className={styles.termsConditions}>{`TERMS & CONDITIONS`}</a>
                <div className={styles.policyList1}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                </div>
                <div className={styles.policyList2}>
                  <div className={styles.returnPolicy}>RETURN POLICY</div>
                </div>
              </div>
            </div>
            <Newsletter
              propFlex="unset"
              propMinWidth="unset"
              propWidth="566.8px"
              propPadding="0px 28px 0px 0px"
            />
            <div className={styles.paymentSocial}>
              <div className={styles.payment}>
                <div className={styles.weAccept}>WE ACCEPT</div>
              </div>
              <div className={styles.socialMedia}>
                <img
                  className={styles.accept1Icon}
                  loading="lazy"
                  alt=""
                  src="/accept-1@2x.png"
                />
                <div className={styles.socialHeading}>
                  <div className={styles.socialMedia1}>SOCIAL MEDIA</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactCopyright}>
            <div className={styles.contact}>
              <div className={styles.contactUs} onClick={onCONTACTUSTextClick}>
                CONTACT US
              </div>
              <div className={styles.socialIconsContainer}>
                <div className={styles.socialIconRow}>
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
                    src="/social-icons-21.svg"
                  />
                  <img
                    className={styles.socialIcons3}
                    loading="lazy"
                    alt=""
                    src="/social-icons-31.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.copyright}>
              <div
                className={styles.copyright2024}
              >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Artists;
