import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}>Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
