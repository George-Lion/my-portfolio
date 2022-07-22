import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}>Thanks for scrolling.</p>
    </div>
  );
};

export default Footer;
