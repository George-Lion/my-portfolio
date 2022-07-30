import React, { Fragment } from "react";
import styles from "./Footer.module.scss";
let url1 = "https://github.com/George-Lion";
let url2 = "https://linkedin.com/in/jorgeleonb";

const Footer = () => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.footer__logo} data-aos="zoom-in">
          <span>
            <i className="fab fa-gg-circle"></i>
          </span>
        </div>
        <p className={styles.footer__copyright}>Thanks for scrolling.</p>

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
            href={url2}
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
