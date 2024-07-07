import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Content from "../components/content";
import GroupComponent2 from "../components/group-component2";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import styles from "./main-shop.module.css";

const MainShop: NextPage = () => {
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
    <div className={styles.mainShop}>
      <header className={styles.navbar}>
        <div className={styles.brandLogoParent}>
          <div className={styles.brandLogo}>
            <a
              className={styles.globalArtisansHub}
              onClick={onGlobalArtisansHubClick}
            >
              Global Artisans Hub
            </a>
            <div className={styles.shoppingCartIcon}>
              <div className={styles.shoppingCartBackgroundParent}>
                <input className={styles.shoppingCartBackground} type="text" />
                <div className={styles.shoppingCartInner}>
                  <div className={styles.shoppingCartContent}>
                    <img
                      className={styles.shoppingBagIcon}
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
          <div className={styles.menu}>
            <div className={styles.menuDivider} />
            <nav className={styles.menuItems}>
              <nav className={styles.menuLinks}>
                <div className={styles.artists}>
                  <a className={styles.artists1} onClick={onARTISTSTextClick}>
                    ARTISTS
                  </a>
                </div>
                <div className={styles.shop}>
                  <a className={styles.shop1} onClick={onSHOPTextClick}>
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
      <Content />
      <section className={styles.mainShopInner}>
        <div className={styles.homeDecorItemsParent}>
          <div className={styles.homeDecorItems}>
            <div className={styles.homeDecor}>Home Decor</div>
            <div className={styles.homeDecorItemsInner}>
              <div className={styles.moreArticlesItemsParent}>
                <div className={styles.moreArticlesItems}>
                  <a className={styles.moreArticles}>Explore more</a>
                  <img
                    className={styles.iconarrowRight}
                    alt=""
                    src="/iconarrowright2.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
            </div>
          </div>
          <div className={styles.instanceParent}>
            <GroupComponent2
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
              shoppingBag="/shopping-bag-1.svg"
            />
            <GroupComponent1
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
            />
            <GroupComponent1
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-12@2x.png"
              peacockChandbaliHoopEarri="Acrylic Ulambo dame dolls"
              rs86400="Rs. 300.00"
            />
          </div>
        </div>
      </section>
      <section className={styles.mainShopChild}>
        <div className={styles.frameParent}>
          <div className={styles.artCraftsParent}>
            <div className={styles.artCrafts}>{`Art & Crafts`}</div>
            <div className={styles.instanceWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.moreArticlesParent}>
                  <a className={styles.moreArticles1}>Explore more</a>
                  <img
                    className={styles.iconarrowRight1}
                    loading="lazy"
                    alt=""
                    src="/iconarrowright2.svg"
                  />
                </div>
                <div className={styles.instanceItem} />
              </div>
            </div>
          </div>
          <div className={styles.instanceGroup}>
            <GroupComponent2
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
              shoppingBag="/shopping-bag-1.svg"
            />
            <GroupComponent1
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
            />
            <GroupComponent1
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
            />
            <GroupComponent
              image="/rectangle-4144-18@2x.png"
              peacockChandbaliHoopEarri="Mango Wood Elephant Tealight Holders in Red (Pair), 'Royal Light in Red'"
              rs86400="Rs. 864.00"
            />
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <div className={styles.personalCareProductsParent}>
            <div className={styles.personalCareProducts}>
              Personal Care Products
            </div>
            <div className={styles.instanceContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.moreArticlesGroup}>
                  <a className={styles.moreArticles2}>Explore more</a>
                  <img
                    className={styles.iconarrowRight2}
                    alt=""
                    src="/iconarrowright2.svg"
                  />
                </div>
                <div className={styles.instanceInner} />
              </div>
            </div>
          </div>
          <div className={styles.instanceParent1}>
            <GroupComponent2
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
              shoppingBag="/shopping-bag-1.svg"
            />
            <GroupComponent1
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
            />
            <GroupComponent1
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
            />
            <GroupComponent
              image="/rectangle-4144-24@2x.png"
              peacockChandbaliHoopEarri="Scoop Facial Bars - Zero Waste Beauty"
              rs86400="Rs. 300.00"
            />
          </div>
        </div>
      </section>
      <footer className={styles.frameFooter}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.content}>
          <div className={styles.links}>
            <div className={styles.pageLinks}>
              <div className={styles.artistsParent}>
                <a className={styles.artists2} onClick={onARTISTSTextClick}>
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
              <div className={styles.nestedLinksParent}>
                <div className={styles.nestedLinks}>
                  <div className={styles.supportLinks}>
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
                <div className={styles.policyLinks}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                  <div className={styles.returnPolicy}>
                    <div className={styles.returnPolicy1}>RETURN POLICY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.subscription}>
                <div className={styles.toHearMore}>
                  TO HEAR MORE FROM THESE GREAT ARTISANS
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.inputContainer}>
                  <div className={styles.enterYourEmail}>ENTER YOUR EMAIL</div>
                </div>
                <button className={styles.subscribeWrapper}>
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentTitle}>
                <div className={styles.weAccept}>WE ACCEPT</div>
              </div>
              <img
                className={styles.accept1Icon}
                loading="lazy"
                alt=""
                src="/accept-1@2x.png"
              />
            </div>
            <div className={styles.socialMedia}>
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
        </div>
        <div className={styles.copyright}>
          <div
            className={styles.copyright2024}
          >{`Copyright © 2024 GlobalArtisansHub. All rights reserved | Designed & Developed by : GlobalArtisansHub`}</div>
        </div>
      </footer>
    </div>
  );
};

export default MainShop;
