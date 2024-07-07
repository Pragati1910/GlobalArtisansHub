import type { NextPage } from "next";
import styles from "./payment-social.module.css";

export type PaymentSocialType = {
  className?: string;
  socialIcons?: string;
  socialIcons1?: string;
  socialIcons2?: string;
  socialIcons3?: string;
};

const PaymentSocial: NextPage<PaymentSocialType> = ({
  className = "",
  socialIcons,
  socialIcons1,
  socialIcons2,
  socialIcons3,
}) => {
  return (
    <div className={[styles.paymentSocial, className].join(" ")}>
      <div className={styles.payment}>
        <div className={styles.weAcceptWrapper}>
          <div className={styles.weAccept}>WE ACCEPT</div>
        </div>
        <img
          className={styles.accept1Icon}
          loading="lazy"
          alt=""
          src="/accept-1@2x.png"
        />
      </div>
      <div className={styles.social}>
        <div className={styles.socialMediaWrapper}>
          <div className={styles.socialMedia}>SOCIAL MEDIA</div>
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.socialIcons1}
            loading="lazy"
            alt=""
            src={socialIcons}
          />
          <img
            className={styles.socialIcons2}
            loading="lazy"
            alt=""
            src={socialIcons1}
          />
          <img
            className={styles.socialIcons3}
            loading="lazy"
            alt=""
            src={socialIcons2}
          />
          <img
            className={styles.socialIcons4}
            loading="lazy"
            alt=""
            src={socialIcons3}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSocial;
