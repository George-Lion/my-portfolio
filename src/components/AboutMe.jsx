import React, { Fragment } from "react";
import pdf from "../resources/Jorge_Leon_CV.pdf";
import img2 from "../img/me.png";
import Skills from "../components/Skills";
import { HiDocumentDownload } from "react-icons/hi";

import styles from "./AboutMe.module.scss";
import { useTranslation } from "react-i18next";

const AboutMe = ({ theme }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <div
        className={
          theme == "dark"
            ? styles.bloc2 + " " + styles.bloc2__dark
            : styles.bloc2 + " " + styles.bloc2__light
        }
        id="about"
      >
        <div className={styles.bloc2__box}>
          <div className={styles.bloc2__box__content}>
            <div className={styles.bloc2__box__content__picbox}>
              <img
                className={styles.bloc2__box__content__picbox__picture1}
                src={img2}
              />
            </div>
            <div
              className={styles.bloc2__box__content__box1}
              data-aos="fade-up"
            >
              <div>
                <p className={styles.bloc2__box__content__box1__text0}>
                  {t("header.discover")}
                </p>
              </div>
              <div
                className={
                  theme == "dark"
                    ? styles.bloc2__box__content__box1__me +
                      " " +
                      styles.bloc2__box__content__box1__me__dark
                    : styles.bloc2__box__content__box1__me +
                      " " +
                      styles.bloc2__box__content__box1__me__light
                }
                data-aos="fade-up"
              >
                {t("header.about-me")}
              </div>
              <div className={styles.bloc2__box__content__box1__line}></div>
              <p
                className={
                  theme == "dark"
                    ? styles.bloc2__box__content__box1__text1 +
                      " " +
                      styles.bloc2__box__content__box1__text1__dark
                    : styles.bloc2__box__content__box1__text1 +
                      " " +
                      styles.bloc2__box__content__box1__text1__light
                }
              >
                {t("header.description")}
              </p>
              <a
                className={styles.bloc2__box__content__box1__text1__button}
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Jorge_Leon_CV.pdf"
                title="Click to download CV"
              >
                {t("header.download")}{" "}
                <HiDocumentDownload className={styles.icon} />
                <div
                  className={
                    styles.bloc2__box__content__box1__text1__button__btn
                  }
                  data-aos="fade-up"
                ></div>
              </a>
            </div>
          </div>
          {/* SKILLS */}
          <Skills theme={theme} />
        </div>
      </div>
      <div className={styles.bloc3}></div>
    </Fragment>
  );
};

export default AboutMe;
