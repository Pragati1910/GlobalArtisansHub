import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./content1.module.css";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
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
    <section className={[styles.content, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.frameParent}>
          <div className={styles.globalArtisansHubParent}>
            <a
              className={styles.globalArtisansHub}
              onClick={onGlobalArtisansHubClick}
            >
              Global Artisans Hub
            </a>
            <div className={styles.navbarLinks}>
              <div className={styles.navbarRight}>
                <input className={styles.navbarDivider} type="text" />
                <div className={styles.navbarAuth}>
                  <div className={styles.userMenu}>
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
          <div className={styles.navbarDividerRight}>
            <div className={styles.navbarDividerRightChild} />
            <nav className={styles.navbarActions}>
              <nav className={styles.blogLinks}>
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
    </section>
  );
};

export default Content1;
