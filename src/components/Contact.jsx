import React, { Fragment } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Fragment>
      <div className={styles.contact} id="contact">
        <div className={styles.contact__master}>
          <div className={styles.contact__master__content1}>
            <h5 className={styles.contact__master__content1__more}>
              Do you want to know something more?
            </h5>
            <h1 className={styles.contact__master__content1__title}>Contact</h1>
            <div className={styles.contact__master__content1__line}></div>
          </div>

          <div className={styles.contact__master__box1}>
            <div className={styles.contact__master__box1__content2}>
              <input
                type="text"
                className={styles.contact__master__box1__content2__inputs}
                placeholder="Name"
              ></input>
              <input
                type="text"
                className={styles.contact__master__box1__content2__inputs}
                placeholder="E-mail"
              ></input>
              <input
                type="text"
                className={styles.contact__master__box1__content2__text}
                placeholder="E-mail"
              ></input>
              <div className={styles.contact__master__box1__content2__space}>
                <button
                  type="button"
                  className={
                    styles.contact__master__box1__content2__space__button
                  }
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
