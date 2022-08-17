import React, { Fragment } from "react";
import styles from "./Footer.module.scss";
import img1 from "../img/LOGO.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";
  let url3 = "https://www.instagram.com/geek.george/";
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.footer__logo} data-aos="zoom-in">
          <span>
            <img src={img1} className={styles.footer__logo__log} />
          </span>
        </div>
        <p className={styles.footer__copyright}>{t("header.thanks")}</p>

        <div className={styles.footer__ikon}>
          <a
            className={styles.footer__ikon__icon}
            href={url1}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-github" title="Github"></i>
          </a>
          <a
            className={styles.footer__ikon__icon}
            href={url2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" title="Linkedin"></i>
          </a>
          <a
            className={styles.footer__ikon__icon}
            href={url3}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" title="Instagram"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
