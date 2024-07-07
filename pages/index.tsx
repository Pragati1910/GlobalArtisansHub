import type { NextPage } from "next";
import Navbar from "../components/navbar";
import FrameComponent3 from "../components/frame-component3";
import Categories from "../components/categories";
import Articles from "../components/articles";
import Mission from "../components/mission";
import FrameComponent1 from "../components/frame-component1";
import CommunitySustainability1 from "../components/community-sustainability1";
import CommunitySustainability from "../components/community-sustainability";
import GetInvolvedButton from "../components/get-involved-button";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <FrameComponent3 />
          <div className={styles.valueProposition}>
            <div className={styles.empowerment}>
              <div className={styles.empowermentContent}>
                <div className={styles.womenEmpowerment}>Women Empowerment</div>
                <div className={styles.productQualities}>
                  <div className={styles.qualityDurabilityParent}>
                    <div className={styles.qualityDurability}>
                      <div className={styles.quality}>Quality</div>
                    </div>
                    <div className={styles.qualityDurability1}>
                      <div className={styles.durability}>Durability</div>
                    </div>
                    <div className={styles.authenticSustainableParent}>
                      <div className={styles.authenticSustainable}>
                        <div className={styles.authentic}>
                          <div className={styles.authentic1}>Authentic</div>
                        </div>
                        <div className={styles.sustainable}>Sustainable</div>
                      </div>
                      <div className={styles.ourProducts}>
                        <h1 className={styles.ourProducts1}>Our Products</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.empowermentInner}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </section>
      <Articles />
      <Mission />
      <section className={styles.valuesSustainability}>
        <div className={styles.valuesSustainabilityContent}>
          <div className={styles.valuesHeaderWrapper}>
            <div className={styles.valuesHeader}>
              <h1 className={styles.ourValues}>Our Values</h1>
              <div className={styles.valuesDivider} />
            </div>
          </div>
          <FrameComponent1
            empowerment="Empowerment"
            weBelieveInThePowerOfHand="We believe in the power of handmade crafts to transform lives. By supporting women artisans, we are not only promoting their craft but also enabling them to gain financial independence, self-confidence, and a stronger voice in their communities."
            empowermentImage="/rectangle-4138@2x.png"
          />
          <CommunitySustainability1 />
          <CommunitySustainability />
        </div>
      </section>
      <section className={styles.getInvolvedHeaderParent}>
        <div className={styles.getInvolvedHeader}>
          <h2 className={styles.getInvolved}>Get Involved</h2>
        </div>
        <div className={styles.getInvolvedDivider}>
          <div className={styles.getInvolvedDescription} />
        </div>
        <div className={styles.getInvolvedCallToAction}>
          <div className={styles.joinUsIn}>
            Join us in our mission to empower women artisans and celebrate their
            incredible craftsmanship. There are many ways you can get involved
            and make a difference.
          </div>
        </div>
        <GetInvolvedButton />
        <FrameComponent />
        <img
          className={styles.pageBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-4156@2x.png"
        />
      </section>
    </div>
  );
};

export default LandingPage;
