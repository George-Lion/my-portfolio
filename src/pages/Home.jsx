import React, { Fragment } from "react";

import styles from "./Home.module.scss";

const Lop = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.header__box}>
          <div className="">
            <h1 className={styles.header__myName}>Hola, Soy Jorge</h1>
            <p className={styles.header__mytitle}>Full Stack Developer</p>
          </div>
          <div>
            <img
              className={styles.header__photo1}
              src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
      <p className={styles.title}>Portfolio</p>
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
