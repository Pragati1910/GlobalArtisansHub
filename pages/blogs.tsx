import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import styles from "./blogs.module.css";

const Blogs: NextPage = () => {
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
    <div className={styles.blogs}>
      <Navbar />
      <main className={styles.content}>
        <section className={styles.headerContentParent}>
          <div className={styles.headerContent}>
            <div className={styles.header}>
              <div className={styles.header1}>
                <b className={styles.article}>Article</b>
                <i className={styles.theArtOf}>
                  The Art of Handcrafted Treasures: Celebrating Global Artisans
                </i>
                <div className={styles.metadata}>
                  <div className={styles.elementsmeta}>
                    <img
                      className={styles.interfaceoutlineuserCircleIcon}
                      loading="lazy"
                      alt=""
                      src="/interfaceoutlineusercircle.svg"
                    />
                    <div className={styles.nyUnitedStates}>Henrik Annemark</div>
                  </div>
                  <div className={styles.elementsmeta1}>
                    <img
                      className={styles.timeAndDateoutlinecalendar}
                      alt=""
                      src="/time-and-dateoutlinecalendar.svg"
                    />
                    <div className={styles.nyUnitedStates1}>April 1, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.imagePlaceholderBlog}
            loading="lazy"
            alt=""
            src="/image-placeholder-blog@2x.png"
          />
          <div className={styles.introParagraph}>
            <div className={styles.weBelieveIn}>
              We believe in the power of handcrafted artistry to tell stories,
              bridge cultures, and empower communities. Our marketplace is more
              than just a platform for buying and selling; it’s a celebration of
              the incredible talents of artisans from around the world. Today,
              we delve into the rich tapestry of global craftsmanship and the
              impact it has on both creators and consumers.
            </div>
            <div className={styles.placeholderImages}>
              <img
                className={styles.imagePlaceholderIcon}
                loading="lazy"
                alt=""
                src="/image-placeholder@2x.png"
              />
              <img
                className={styles.imagePlaceholderIcon1}
                loading="lazy"
                alt=""
                src="/image-placeholder-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.traditionParagraph}>
            <div className={styles.aJourneyThroughContainer}>
              <p className={styles.aJourneyThroughTimeAndTra}>
                <b>A Journey Through Time and Tradition</b>
              </p>
              <p className={styles.everyPieceIn}>
                Every piece in our marketplace carries the essence of its
                creator’s heritage. From intricate beadwork of the Maasai in
                Kenya to the delicate embroidery of Indian artisans, these
                crafts are not just products; they are the embodiment of
                centuries-old traditions passed down through generations. By
                purchasing these items, you are not just acquiring a beautiful
                piece of art, but also a slice of history and culture.
              </p>
            </div>
            <div className={styles.imagePlaceholderBlogParent}>
              <img
                className={styles.imagePlaceholderBlog1}
                loading="lazy"
                alt=""
                src="/image-placeholder-blog-1@2x.png"
              />
              <div className={styles.empowerParagraph}>
                <div className={styles.empoweringArtisansOneContainer}>
                  <p className={styles.empoweringArtisansOnePurch}>
                    <b>Empowering Artisans, One Purchase at a Time.</b>
                  </p>
                  <p className={styles.oneOfTheCoreMissionsOfM}>
                    <span className={styles.oneOfTheCoreMissionsOfM1}>
                      <span>
                        One of the core missions of [Marketplace Name] is to
                        empower artisans economically. Many talented craftsmen
                        and craftswomen around the world lack access to a global
                        market, which limits their ability to sustain their
                        livelihoods. By providing a platform where their work
                        can be appreciated and purchased by a worldwide
                        audience, we help these artisans achieve financial
                        stability and independence. Every purchase you make
                        directly supports their families and communities.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span className={styles.blankLine1}>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.sustainableCraftsmanship}>
                    <b>Sustainable Craftsmanship</b>
                  </p>
                  <p
                    className={styles.inAWorld}
                  >{`In a world increasingly dominated by mass-produced goods, the value of handmade items cannot be overstated. Artisanal products are often made using sustainable methods and locally sourced materials, minimizing environmental impact. `}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.relatedArticles}>
            <div className={styles.relatedArticlesHeader}>
              <b className={styles.youMightAlso}>You might also like</b>
              <div className={styles.moreArticlesLink}>
                <div className={styles.moreLinkContentParent}>
                  <div className={styles.moreLinkContent}>
                    <div className={styles.moreArticles}>More Articles</div>
                    <img
                      className={styles.iconarrowRight}
                      loading="lazy"
                      alt=""
                      src="/iconarrowright.svg"
                    />
                  </div>
                  <div className={styles.relatedSeparator} />
                </div>
              </div>
            </div>
            <div className={styles.row5}>
              <div className={styles.article1}>
                <img
                  className={styles.imgContainerIcon}
                  loading="lazy"
                  alt=""
                  src="/img-container@2x.png"
                />
                <div className={styles.info}>
                  <i className={styles.sustainableStyleHow}>
                    Sustainable Style: How Artisanal Goods Are Leading the Way
                    in Eco-Friendly Fashion
                  </i>
                  <div className={styles.october162023}>October 16, 2023</div>
                </div>
              </div>
              <div className={styles.article2}>
                <img
                  className={styles.imgContainerIcon1}
                  loading="lazy"
                  alt=""
                  src="/img-container-1@2x.png"
                />
                <div className={styles.info1}>
                  <i className={styles.meetTheMakers}>
                    Meet the Makers: Inspiring Stories from Artisans Around the
                    World
                  </i>
                  <div className={styles.october1620231}>October 16, 2023</div>
                </div>
              </div>
              <div className={styles.article3}>
                <img
                  className={styles.imgContainerIcon2}
                  loading="lazy"
                  alt=""
                  src="/img-container-2@2x.png"
                />
                <div className={styles.info2}>
                  <i className={styles.theCulturalTapestry}>
                    The Cultural Tapestry: Exploring the Diverse Traditions
                    Behind Our Handcrafted Products
                  </i>
                  <div className={styles.october1620232}>October 16, 2023</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footerSeparatorParent}>
        <div className={styles.footerSeparator} />
        <div className={styles.footerContent}>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.pageLinks}>
                <a className={styles.artists} onClick={onARTISTSTextClick}>
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
                <div className={styles.policies}>
                  <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
                </div>
                <a className={styles.termsConditions}>{`TERMS & CONDITIONS`}</a>
                <div className={styles.policies1}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                </div>
                <div className={styles.policies2}>
                  <div className={styles.returnPolicy}>RETURN POLICY</div>
                </div>
              </div>
            </div>
            <div className={styles.subscription}>
              <div className={styles.subscriptionTitle}>
                <div className={styles.toHearMore}>
                  TO HEAR MORE FROM THESE GREAT ARTISANS
                </div>
              </div>
              <div className={styles.emailInput}>
                <div className={styles.emailField}>
                  <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
                </div>
                <button className={styles.subscribeWrapper}>
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                </button>
              </div>
            </div>
            <div className={styles.paymentSocial}>
              <div className={styles.payment}>
                <div className={styles.weAccept}>WE ACCEPT</div>
              </div>
              <div className={styles.paymentIcons}>
                <img
                  className={styles.accept1Icon}
                  loading="lazy"
                  alt=""
                  src="/accept-1@2x.png"
                />
                <div className={styles.socialLinks}>
                  <div className={styles.socialMedia}>SOCIAL MEDIA</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactCopyright}>
            <div className={styles.contact}>
              <div className={styles.contactUs} onClick={onCONTACTUSTextClick}>
                CONTACT US
              </div>
              <div className={styles.iconsWrapper}>
                <div className={styles.icons}>
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

export default Blogs;
