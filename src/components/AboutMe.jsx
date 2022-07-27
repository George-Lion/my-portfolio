import React, { Fragment } from "react";
import pdf from "../resources/Jorge_Leon_CV.pdf";
import img2 from "../img/me.png";
import {
  SiPostgresql,
  SiFlask,
  SiMysql,
  SiGithub,
  SiGit,
  SiHeroku,
  SiTrello,
  SiWindowsterminal,
} from "react-icons/si";
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
                  {t("header.download")}
                </a>
              </div>
            </div>
          </div>

          {/* SKILLS */}

          <div className={styles.bloc2__box__b1}>
            <div className={styles.bloc2__box__b1__skills}>
              <div
                className={styles.bloc2__box__b1__skills__title}
                data-aos="fade-up"
              >
                <p>{t("header.skills")}</p>
              </div>
              <div className={styles.bloc2__box__b1__skills__position}>
                <div
                  className={styles.bloc2__box__b1__skills__position__line}
                ></div>
              </div>
            </div>
            <div className={styles.bloc2__box__b1__box}>
              <div className={styles.bloc2__box__b1__box__frontEnd}>
                <div
                  className={styles.bloc2__box__b1__box__frontEnd__title}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <h4>Frontend</h4>
                </div>
                <div className={styles.bloc2__box__b1__box__frontEnd__icons}>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-html5"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        HTML5
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-css3-alt"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        CSS3
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-js-square"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        JavaScript
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-react"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        React
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-figma"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Figma
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-sass"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Sass
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fab fa-bootstrap"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Bootstrap
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.bloc2__box__b1__box__frontEnd__icons__icon
                    }
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Responsive web
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACKEND*/}

              <div className={styles.bloc2__box__b1__box__backEnd}>
                <div
                  className={styles.bloc2__box__b1__box__backEnd__title}
                  data-aos="fade-up"
                >
                  <h4>Backend</h4>
                </div>
                <div
                  className={styles.bloc2__box__b1__box__backEnd__icons}
                  data-aos="fade-up"
                >
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                  >
                    <i className="fab fa-python"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        Python
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                    data-aos="fade-up"
                  >
                    <i className="fab fa-npm"></i>
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        NPM
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiPostgresql />
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        Postgre
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiFlask />
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        Flask
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiMysql />
                    <div data-aos="fade-up">
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        Mysql
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__backEnd__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiWindowsterminal />
                    <div>
                      <p
                        className={
                          styles.bloc2__box__b1__box__backEnd__icons__icon__title
                        }
                      >
                        C. Terminal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*   OTHERS */}

              <div className={styles.bloc2__box__b1__box__others}>
                <div
                  className={styles.bloc2__box__b1__box__others__title}
                  data-aos="fade-up"
                >
                  <h4>Others</h4>
                </div>
                <div
                  className={styles.bloc2__box__b1__box__others__icons}
                  data-aos="fade-up"
                >
                  <div
                    className={styles.bloc2__box__b1__box__others__icons__icon}
                  >
                    <SiGithub />
                    <div>
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Github
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__others__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiGit />
                    <div>
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Git
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__others__icons__icon}
                    data-aos="fade-up"
                  >
                    <div>
                      <SiHeroku />
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Heroku
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.bloc2__box__b1__box__others__icons__icon}
                    data-aos="fade-up"
                  >
                    <SiTrello />
                    <div>
                      <p
                        className={
                          styles.bloc2__box__b1__box__frontEnd__icons__icon__title
                        }
                      >
                        Trello
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
