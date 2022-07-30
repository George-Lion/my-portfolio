import React, { Fragment } from "react";
import pdf from "../resources/Jorge_Leon_CV.pdf";
import img2 from "../img/me.png";
import Skills from "../components/Skills";
import {
  SiPostgresql,
  SiFlask,
  SiMysql,
  SiGithub,
  SiGit,
  SiHeroku,
  SiTrello,
  SiWindowsterminal,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";
import { HiDocumentDownload } from "react-icons/hi";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

import styles from "./AboutMe.module.scss";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <div className={styles.bloc2} id="about">
        <div className={styles.bloc2__box} data-aos="fade-up">
          <div className={styles.bloc2__box__content} data-aos="fade-up">
            <div>
              <img
                className={styles.bloc2__box__content__picture1}
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
                className={styles.bloc2__box__content__box1__me}
                data-aos="fade-up"
              >
                {t("header.about-me")}
              </div>
              <div className={styles.bloc2__box__content__box1__line}></div>
              <p className={styles.bloc2__box__content__box1__text1}>
                {t("header.description")}
              </p>
              <div data-aos="fade-up">
                <a
                  className={styles.bloc2__box__content__box1__text1__button}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Jorge_Leon_CV.pdf"
                  title="Click to download CV"
                >
                  {t("header.download")}{" "}
                  <HiDocumentDownload
                    className={
                      styles.bloc2__box__content__box1__text1__button_icon
                    }
                  />
                </a>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <Skills />
        </div>
      </div>
      <div className={styles.bloc3}></div>
    </Fragment>
  );
};

export default AboutMe;
