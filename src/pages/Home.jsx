import React, { Fragment } from "react";

import styles from "./Home.module.scss";

const Lop = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1 className={styles.header__myName}>Hola, Soy Jorge León</h1>
        <p className={styles.header__mytitle}>Frontend develop</p>
      </div>
      <p className={styles.title}>Trabajos</p>
      <div className={styles.services}>
        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lop;
