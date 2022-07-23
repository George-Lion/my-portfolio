import React, { Fragment } from "react";
import pdf from "../resources/Jorge_Leon_CV.pdf";
import img2 from "../img/me.png";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <Fragment>
      <div className={styles.bloc2} id="about">
        <div className={styles.bloc2__me}>About me</div>s
        <div className={styles.bloc2__content}>
          <div>
            <img className={styles.bloc2__content__picture1} src={img2} />
          </div>
          <div className={styles.bloc2__content__box1}>
            <p className={styles.bloc2__content__box1__text1}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
            <div>
              <a
                className={styles.bloc2__content__box1__button}
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Jorge_Leon_CV.pdf"
                title="Click to download CV"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
