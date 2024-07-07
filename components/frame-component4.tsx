import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
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

  return (
    <section className={[styles.navbarWrapper, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.frameParent}>
          <div className={styles.globalArtisansHubParent}>
            <a
              className={styles.globalArtisansHub}
              onClick={onGlobalArtisansHubClick}
            >
              Global Artisans Hub
            </a>
            <div className={styles.shoppingBagContainerWrapper}>
              <div className={styles.shoppingBagContainer}>
                <input className={styles.shoppingBagBackground} type="text" />
                <div className={styles.shoppingBagIconContainerWrapper}>
                  <div className={styles.shoppingBagIconContainer}>
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
          <div className={styles.menuSeparatorParent}>
            <div className={styles.menuSeparator} />
            <nav className={styles.menuItemsContainerWrapper}>
              <nav className={styles.menuItemsContainer}>
                <div className={styles.artistsMenuItem}>
                  <a className={styles.artists} onClick={onARTISTSTextClick}>
                    ARTISTS
                  </a>
                </div>
                <div className={styles.shopMenuItem}>
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
    </section>
  );
};

export default FrameComponent4;
