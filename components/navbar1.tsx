import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar1.module.css";

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
    <header style={{ background: "#f2f2f2", padding: "10px 20px" }} className={className}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            style={{ padding: "5px", marginRight: "10px", fontSize: "14px", border: "1px solid #ccc" }}
            placeholder="Global Artisans Hub"
            type="text"
            onClick={onGlobalArtisansHubClick}
          />
          <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
            <img
              style={{ marginRight: "10px" }}
              alt=""
              src="/shopping-bag.svg"
            />
            <img
              style={{ marginRight: "10px" }}
              alt=""
              src="/person.svg"
            />
          </div>
        </div>
        <img
          style={{ cursor: "pointer" }}
          alt=""
          src="/search.svg"
          onClick={onGlobalArtisansHubClick}
        />
      </div>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
          <a style={{ cursor: "pointer", marginRight: "20px" }} onClick={onARTISTSTextClick}>
            ARTISTS
          </a>
          <a style={{ cursor: "pointer", marginRight: "20px" }} onClick={onSHOPTextClick}>
            SHOP
          </a>
          <a style={{ cursor: "pointer", marginRight: "20px" }} onClick={onBLOGTextClick}>
            BLOG
          </a>
          <a style={{ cursor: "pointer" }} onClick={onABOUTUSTextClick}>
            ABOUT US
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;