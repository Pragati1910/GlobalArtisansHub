import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
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
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.globalArtisansHubParent}>
          <a
            className={styles.globalArtisansHub}
            onClick={onGlobalArtisansHubClick}
          >
            Global Artisans Hub
          </a>
          <div className={styles.navbarLinks}>
            <div className={styles.navbarSeparatorParent}>
              <input className={styles.navbarSeparator} type="text" />
              <div className={styles.userActions}>
                <div className={styles.cartIcon}>
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
        <div className={styles.blogLinks}>
          <div className={styles.linksSeparator} />
          <nav className={styles.blogLinkWrapper}>
            <nav className={styles.blogLink}>
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
  );
};

export default Navbar;
