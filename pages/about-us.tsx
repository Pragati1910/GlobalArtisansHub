import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import EmpowermentContainer from "../components/empowerment-container";
import OurValuesColumns from "../components/our-values-columns";
import SuccessStoriesContent from "../components/success-stories-content";
import { useRouter } from "next/router";
import Newsletter from "../components/newsletter";
import styles from "./about-us.module.css";

const AboutUs: NextPage = () => {
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
    <div className={styles.aboutUs}>
      <FrameComponent4 />
      <section className={styles.contentContainerWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            <div className={styles.leftContent}>
              <div className={styles.leftContentTop}>
                <div className={styles.sdg10ReduceInequalitiesContainer}>
                  <p className={styles.sdg10ReduceInequalities}>
                    SDG-5 GENDER EQUALITY
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.kopikaM}>Kopika M</p>
                  <p className={styles.bai1109}>22BAI1109</p>
                  <p className={styles.p}>8848970171</p>
                  <p className={styles.kopikam2022vitstudentacin}>
                    kopika.m2022@vitstudent.ac.in
                  </p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <p className={styles.pragatiMaheshwari}>Pragati Maheshwari</p>
                  <p className={styles.bai1072}>22BAI1072</p>
                  <p className={styles.p1}>8825547669</p>
                  <p className={styles.pragatimaheshwari2022vitstud}>
                    pragati.maheshwari2022@vitstudent.ac.in
                  </p>
                </div>
              </div>
              <div className={styles.leftContentSeparator} />
            </div>
          </div>
          <div className={styles.leftContentBottom}>
            <div className={styles.ourStoryContainerWrapper}>
              <div className={styles.ourStoryContainer}>
                <h1 className={styles.ourStory}>Our Story</h1>
                <div className={styles.ourStorySeparator} />
              </div>
            </div>
            <div className={styles.ourStoryImageContainerParent}>
              <div className={styles.ourStoryImageContainer}>
                <img
                  className={styles.ourStoryImage}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4145@2x.png"
                />
              </div>
              <div className={styles.ourStoryDescription}>
                <h3 className={styles.welcomeToGlobalContainer}>
                  <p className={styles.welcomeToGlobal}>
                    Welcome to Global Artisans Hub, a Journey of Empowerment and
                    Craftsmanship
                  </p>
                  <p className={styles.blankLine4}>&nbsp;</p>
                  <p className={styles.atGlobalArtisans}>
                    At Global Artisans Hub, we believe in the power of
                    handcrafted artistry to tell stories, bridge cultures, and
                    empower women. Our journey began with a simple idea: to
                    create a global platform that connects talented female
                    artisans with customers who appreciate the beauty and value
                    of handmade goods.
                  </p>
                </h3>
                <h3 className={styles.celebratingCulturalHeritageContainer}>
                  <p className={styles.celebratingCulturalHeritage}>
                    Celebrating Cultural Heritage
                  </p>
                  <p className={styles.blankLine5}>&nbsp;</p>
                  <p className={styles.ourMarketplaceIs}>
                    Our marketplace is more than just a place to buy and sell
                    products. It is a celebration of the rich cultural heritage
                    embedded in every piece of art. From the intricate beadwork
                    of the Maasai in Kenya to the delicate embroidery of Indian
                    artisans, each item reflects centuries-old traditions and
                    the unique stories of its creator. By offering these
                    beautiful, handcrafted goods, we aim to preserve and promote
                    the diverse cultures that make our world so vibrant.
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourJourneyContainerWrapper}>
        <div className={styles.ourJourneyContainer}>
          <div className={styles.ourJourneySeparator} />
          <div className={styles.ourJourneyTitleContainerWrapper}>
            <div className={styles.ourJourneyTitleContainer}>
              <h1 className={styles.ourJourney}>Our Journey</h1>
              <div className={styles.ourJourneyTitleSeparator} />
            </div>
          </div>
          <div className={styles.ourJourneyDescription}>
            <h3 className={styles.fromAVisionContainer}>
              <p className={styles.fromAVision}>
                From a Vision to a Global Marketplace
              </p>
              <p className={styles.blankLine6}>&nbsp;</p>
              <p className={styles.atMarketplaceName}>
                At [Marketplace Name], our journey began with a vision to create
                a platform that bridges the gap between talented women artisans,
                especially those from tribal communities, and a global audience
                that values handcrafted goods. Our founders, inspired by the
                beauty and craftsmanship of traditional artisans, set out to
                empower these women by providing them with a sustainable and
                fair-trade marketplace. Through our platform, we aim to uplift
                and support women artisans, ensuring their skills are
                recognized, their stories are told, and their lives are
                transformed.
              </p>
            </h3>
          </div>
        </div>
      </section>
      <section className={styles.ourValuesContainerWrapper}>
        <div className={styles.ourValuesContainer}>
          <div className={styles.ourValuesColumns}>
            <h3 className={styles.theFirstStepsContainer}>
              <p className={styles.theFirstSteps}>The First Steps</p>
              <p className={styles.blankLine7}>&nbsp;</p>
              <p className={styles.ourJourneyStarted}>
                Our journey started with extensive travels and research. We
                visited artisan communities across various countries, learning
                about their unique crafts and the challenges they face. From
                bustling markets in India to serene villages in Africa, we
                connected with talented women artisans, many from tribal
                communities, whose stories and skills moved us profoundly. These
                early experiences shaped our mission and reinforced our
                commitment to fair trade, sustainability, and the empowerment of
                women artisans. By providing these incredible women with a
                platform to showcase their craftsmanship, we aim to support
                their economic independence and preserve their rich cultural
                heritage.
              </p>
            </h3>
          </div>
          <div className={styles.ourValuesColumns1}>
            <h3 className={styles.buildingThePlatformContainer}>
              <p className={styles.buildingThePlatform}>
                Building the Platform
              </p>
              <p className={styles.blankLine8}>&nbsp;</p>
              <p className={styles.creatingAPlatform}>
                Creating a platform that truly serves both artisans and
                customers required dedication and innovation. We focused on
                building a user-friendly website that not only showcases the
                beautiful products of women artisans, especially those from
                tribal communities, but also tells their inspiring stories. Our
                team worked tirelessly to ensure that every aspect of the
                marketplace—from product listings to payment systems—was
                designed to support these talented women and provide a seamless
                shopping experience for customers. By highlighting their unique
                crafts and promoting their cultural heritage, we aim to empower
                these women artisans, fostering economic independence and
                community development.
              </p>
            </h3>
          </div>
          <div className={styles.ourValuesColumns2}>
            <h3 className={styles.lookingAheadOurContainer}>
              <p className={styles.lookingAhead}>Looking Ahead</p>
              <p className={styles.blankLine9}>&nbsp;</p>
              <p className={styles.ourJourneyIs}>
                Our journey is far from over. We are continuously exploring new
                ways to support women artisans, especially those from tribal
                communities, enhance our platform, and expand our reach. Our
                vision for the future includes launching new initiatives,
                partnering with more artisan communities, and deepening our
                commitment to fair trade and sustainability. We aim to create
                more opportunities for these talented women, helping them
                achieve economic independence and preserve their cultural
                heritage. We are excited about the possibilities ahead and
                remain dedicated to our mission of empowering women artisans and
                celebrating global craftsmanship.
              </p>
            </h3>
          </div>
          <div className={styles.ourValuesColumns3}>
            <h3 className={styles.joinUsOnContainer}>
              <p className={styles.joinUsOn}>Join Us on This Journey</p>
              <p className={styles.blankLine10}>&nbsp;</p>
              <p className={styles.weInviteYou}>
                We invite you to be a part of our journey. By choosing Global
                Artisans Hub, you are not just purchasing a product; you are
                supporting a movement. Together, we can make a difference in the
                lives of artisans, promote sustainable practices, and celebrate
                the rich tapestry of human creativity.
              </p>
            </h3>
          </div>
          <div className={styles.ourValuesColumns4}>
            <div className={styles.ourValuesColumnsChild} />
          </div>
          <div className={styles.ourMissionContainerWrapper}>
            <div className={styles.ourMissionContainer}>
              <div className={styles.ourMissionContent}>
                <div className={styles.ourMissionTitleContainer}>
                  <h1 className={styles.ourMission}>Our Mission</h1>
                  <div className={styles.ourMissionSeparatorContaine}>
                    <div className={styles.ourMissionSeparator} />
                  </div>
                </div>
              </div>
              <h3 className={styles.ourMissionIs}>
                Our mission is to empower women artisans by providing a platform
                that showcases their unique, handcrafted products to a global
                audience. We aim to support and celebrate the creativity and
                skills of women from diverse backgrounds, fostering a community
                where their artistic talents can thrive. Through fair trade
                practices and sustainable sourcing, we strive to create economic
                opportunities that lead to financial independence and a better
                quality of life for our artisans.
              </h3>
            </div>
          </div>
          <div className={styles.ourValuesColumns5}>
            <div className={styles.ourValuesColumnsItem} />
          </div>
          <div className={styles.ourValuesContainerContainer}>
            <div className={styles.ourValuesContainer1}>
              <h1 className={styles.ourValues}>Our Values</h1>
              <div className={styles.ourValuesSeparator} />
            </div>
          </div>
          <div className={styles.empowermentContainerWrapper}>
            <EmpowermentContainer
              empowerment="Empowerment"
              weBelieveInThePowerOfHand="We believe in the power of handmade crafts to transform lives. By supporting women artisans, we are not only promoting their craft but also enabling them to gain financial independence, self-confidence, and a stronger voice in their communities."
              ourSuccessImage="/rectangle-4138@2x.png"
            />
          </div>
          <OurValuesColumns />
          <EmpowermentContainer
            empowerment="Community"
            weBelieveInThePowerOfHand="At the heart of our work is a dedication to building a supportive and inclusive community. We celebrate diversity and foster connections between artisans and customers, creating a space where stories are shared, and cultures are appreciated. Through collaboration and mutual respect, we aim to inspire and uplift everyone involved in our journey."
            ourSuccessImage="/rectangle-4138-1@2x.png"
            propFlex="unset"
            propGap="46px"
            propAlignSelf="stretch"
          />
        </div>
      </section>
      <div className={styles.successSeparatorContainer}>
        <div className={styles.successSeparator} />
      </div>
      <section className={styles.successStoriesContainerWrapper}>
        <div className={styles.successStoriesContainer}>
          <h1 className={styles.ourSuccessStories}>Our Success Stories</h1>
          <div className={styles.successStoriesSeparator} />
        </div>
      </section>
      <SuccessStoriesContent />
      <footer className={styles.footerDividerParent}>
        <div className={styles.footerDivider}>
          <div className={styles.footerDividerChild} />
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.artistsParent}>
                <a className={styles.artists} onClick={onARTISTSTextClick}>
                  ARTISTS
                </a>
                <a className={styles.privacyPolicy}>PRIVACY POLICY</a>
              </div>
              <div className={styles.blogParent}>
                <a className={styles.blog} onClick={onBLOGTextClick}>
                  BLOG
                </a>
                <a className={styles.termsConditions}>{`TERMS & CONDITIONS`}</a>
              </div>
              <div className={styles.footerInfo}>
                <div className={styles.footerInfoContainer}>
                  <div className={styles.footerInfoList}>
                    <a className={styles.faq} onClick={onFAQTextClick}>
                      FAQ
                    </a>
                    <a className={styles.aboutUs1} onClick={onABOUTUSTextClick}>
                      ABOUT US
                    </a>
                    <div
                      className={styles.contactUs}
                      onClick={onCONTACTUSTextClick}
                    >
                      CONTACT US
                    </div>
                  </div>
                </div>
                <div className={styles.footerPolicies}>
                  <div className={styles.shippingPolicy}>SHIPPING POLICY</div>
                  <div className={styles.returnPolicy}>
                    <div className={styles.returnPolicy1}>RETURN POLICY</div>
                  </div>
                </div>
              </div>
            </div>
            <Newsletter />
          </div>
          <div className={styles.paymentSocial}>
            <div className={styles.payment}>
              <div className={styles.weAccept}>WE ACCEPT</div>
            </div>
            <div className={styles.paymentIcon}>
              <img
                className={styles.accept1Icon}
                loading="lazy"
                alt=""
                src="/accept-1@2x.png"
              />
            </div>
            <div className={styles.social}>
              <div className={styles.socialContainer}>
                <div className={styles.socialTitle}>
                  <div className={styles.socialMedia}>SOCIAL MEDIA</div>
                </div>
                <div className={styles.socialIcons}>
                  <img
                    className={styles.socialIcons1}
                    loading="lazy"
                    alt=""
                    src="/social-icons.svg"
                  />
                  <img
                    className={styles.socialIcons2}
                    loading="lazy"
                    alt=""
                    src="/social-icons-11.svg"
                  />
                  <img
                    className={styles.socialIcons3}
                    loading="lazy"
                    alt=""
                    src="/social-icons-2.svg"
                  />
                  <img
                    className={styles.socialIcons4}
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
    </div>
  );
};

export default AboutUs;
