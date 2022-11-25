import React from "react";
import landsLogo from "../../assets/icons/landsLogo.svg";
import footer from "./footer-config";
import social from "./socials";

import { useTranslation } from "react-i18next";
const styles = {
  wrapper: `w-screen flex justify-center items-center bg-[#eaeaea]`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  content: `h-max flex flex-col justify-center py-6 px-3 mt-10`,
  info: `
    grid grid-cols-4 gap-10
    phone:flex phone:flex-col
    tablet:flex tablet:flex-col
  `,
  col: `flex flex-col items-center`,
  logo: `
    self-start
    phone:self-center
    tablet:self-center
  `,
  rights: `flex flex-row justify-between text-[0.875rem] font-normal mt-16`,
  linksContainer: `my-6`,
  p: `
    text-[0.875rem] font-normal my-1
    
  `,
  h3: `text-[1.125rem] text-[#049ca6] font-semibold`,
  logosContainer: `flex flex-row flex-wrap justify-center items-center my-6`,
  socialLogo: `
    mx-4 w-[40px] h-[40px]
    phone:w-[30px] phone:h-[30px]
    laptop:w-[35px] phone:h-[35px]
  `
};

const Footer = () => {
  
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.col}>
              <img className={styles.logo} src={landsLogo} width={157} height={40} alt="landsLogo" />
              <div className={styles.linksContainer}>
                <p className={styles.p}>
                User platform LANDS, a platform for digital services for the digitization and sale of assets, projects, placement and attraction of investments, registration and receipt of loans.
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <h3 className={styles.h3}>Lorem ipsum dolor</h3>
              <div className={styles.linksContainer}>
                {footer.map((info) => (
                  <p key={info.id} className={styles.p}>{info.string}</p>
                ))}
              </div>
            </div>
            <div className={styles.col}>
              <h3 className={styles.h3}>Lorem ipsum dolor</h3>
              <div className={styles.linksContainer}>
                {footer.map((info) => (
                  <p key={info.id} className={styles.p}>{info.string}</p>
                ))}
              </div>
            </div>
            <div className={styles.col}>
            <h3 className={styles.h3}>{t("footer.contactUs")}</h3>
              <div className={styles.logosContainer}>
                {social.map((link) => (
                  <a key={link.id} href={link.link} target='_blank' rel="noreferrer"><img className={styles.socialLogo} src={link.img} alt={link.alt} /></a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rights}>
            <p>{t("footer.rights")}</p>
            <p className="block phone:hidden">{t("footer.termsOfUse")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
