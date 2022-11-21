import React, { Fragment, useState } from "react";
import img1 from "../img/Traveland1.png";
import img2 from "../img/log.png";
import img3 from "../img/t3.jpg";
import img4 from "../img/todo.png";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "./Portfolio.module.scss";
import { useTranslation } from "react-i18next";
import {
  SiPostgresql,
  SiFlask,
  SiMysql,
  SiGithub,
  SiGit,
  SiHeroku,
  SiTrello,
  SiWindowsterminal,
  SiAdobexd,
} from "react-icons/si";

const Portfolio = ({ theme }) => {
  let url1 = "https://github.com/George-Lion?tab=repositories";
  let url2 = "https://github.com/George-Lion/FINAL-PROJECT-X";
  let url3 = "https://github.com/George-Lion/Starwars-Blog-Reading-List";
  let url4 = "https://traveland-v2.herokuapp.com/";
  let url5 = "https://github.com/George-Lion/Second-Part-of-the-TODO-list-adding-fetch";
  let url6 = "https://prueba-production-d40c.up.railway.app/";
  const [t, i18n] = useTranslation("global");

  const [picture, setPicture] = useState(true);
  const [picture1, setPicture1] = useState(true);
  const [picture2, setPicture2] = useState(true);

  return (
    <Fragment>
      <div
        className={theme == "dark" ? styles.master__dark : styles.master__light}
        id="portfolio"
      >
        <div className={styles.master__portfolio}>
          <div className={styles.master__portfolio__box}>
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box1__title +
                    " " +
                    styles.master__portfolio__box1__title__dark
                  : styles.master__portfolio__box1__title +
                    " " +
                    styles.master__portfolio__box1__title__light
              }
              data-aos="fade-up"
            >
              {t("header.projects")}
            </div>

            {/* BOX 1 */}

            <div className={styles.master__portfolio__box1__line}></div>
          </div>

          {/* BOX 2 */}

          {picture == true ? (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__dark
                  : styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__light
              }
              data-aos="fade-up"
            >
              <img
                className={styles.master__portfolio__box4__img1}
                src={img3}
                alt="Relltronic project image"
              />
              <div className={styles.master__portfolio__box2__button}>
                <a
                  href={url6}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  onClick={() => {}}
                >
                   <button
                    title="Demo"
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    <i className="fas fa-desktop"></i>
                  </button>
                </a>
                <a
                  href={url3}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  onClick={() => {}}
                >
                  <button
                    title="Code"
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    <i className="fas fa-code"></i>
                  </button>
                </a>
                <button
                  title="Info"
                  className={styles.master__portfolio__box2__button__btn}
                  onClick={() => {
                    setPicture(false);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
            </div>
          ) : (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__dark
                  : styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__light
              }
              data-aos="fade-up"
            >
              <div className={styles.master__portfolio__box4__img1}>
                <div>
                  <h2 className={styles.master__portfolio__box4__img1__title}>
                    Relltronic Ecommerce
                  </h2>
                  <div className={styles.master__portfolio__box4__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box4__img1__box__text
                      }
                    >
                      {t("header.rell")}
                    </h4>
                  </div>
                  <div
                    className={
                      styles.master__portfolio__box4__img1__tecnologies
                    }
                  >
                    <p>{t("header.technology")}</p>
                  </div>
                  <div className={styles.master__portfolio__box4__img1__icons}>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-react"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        React
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-js-square"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        JavaScript
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-html5"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        HTML5
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-bootstrap"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        Bootstrap
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.master__portfolio__box4__img1__return}
                  onClick={() => {
                    setPicture(true);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}

          {/* BOX 3 */}

          {picture1 == true ? (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box3 +
                    " " +
                    styles.master__portfolio__box3__dark
                  : styles.master__portfolio__box3 +
                    " " +
                    styles.master__portfolio__box3__light
              }
              data-aos="fade-up"
            >
              <img
                className={styles.master__portfolio__box3__img1}
                src={img1}
                alt="traveland project image"
              />
              <div className={styles.master__portfolio__box2__page}>
                <div className={styles.master__portfolio__box2__button}>
                  <a
                    href={url4}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    onClick={() => {}}
                  >
                    <button
                      title="Demo"
                      className={styles.master__portfolio__box2__button__btn}
                    >
                      <i className="fas fa-desktop"></i>
                    </button>
                  </a>
                  <a
                    href={url2}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    onClick={() => {}}
                  >
                    <button
                      title="Code"
                      className={styles.master__portfolio__box2__button__btn}
                    >
                      <i className="fas fa-code"></i>
                    </button>
                  </a>
                  <button
                    className={styles.master__portfolio__box2__button__btn}
                    title="Info"
                    onClick={() => {
                      setPicture1(false);
                    }}
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box3 +
                    " " +
                    styles.master__portfolio__box3__dark
                  : styles.master__portfolio__box3 +
                    " " +
                    styles.master__portfolio__box3__light
              }
              data-aos="fade-up"
            >
              <div className={styles.master__portfolio__box3__img1}>
                <div>
                  <h2 className={styles.master__portfolio__box3__img1__title}>
                    Traveland
                  </h2>
                  <div className={styles.master__portfolio__box3__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box3__img1__box__text
                      }
                    >
                      {t("header.traveland")}
                    </h4>
                  </div>
                  <div className={styles.master__portfolio__box3__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box3__img1__box__text1
                      }
                    >
                      {t("header.c1")}
                    </h4>
                  </div>

                  <div className={styles.master__portfolio__box3__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box3__img1__box__text1
                      }
                    >
                      {t("header.c2")}
                    </h4>
                  </div>

                  <div
                    className={
                      styles.master__portfolio__box3__img1__tecnologies
                    }
                  >
                    <p>{t("header.technology")}</p>
                  </div>
                  <div className={styles.master__portfolio__box3__img1__icons}>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <i className="fab fa-react"></i>
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        React
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <i className="fab fa-js-square"></i>
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        JavaScript
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <i className="fab fa-html5"></i>
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        HTML5
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <i className="fab fa-css3-alt"></i>
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        CSS3
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <i className="fab fa-python"></i>
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        Python
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box3__img1__icons__text
                      }
                    >
                      <SiFlask />
                      <p
                        className={
                          styles.master__portfolio__box3__img1__icons__name
                        }
                      >
                        Flask
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.master__portfolio__box3__img1__return}
                  onClick={() => {
                    setPicture1(true);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}
          {/* BOX 4 */}

          {picture2 == true ? (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__dark
                  : styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__light
              }
              data-aos="fade-up"
            >
              <img
                className={styles.master__portfolio__box4__img1}
                src={img4}
                alt=""
              />
              <div className={styles.master__portfolio__box2__button}>
                <a
                  href={url4}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  onClick={() => {}}
                >
                  {/*  <button
                    title="Demo"
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    <i className="fas fa-desktop"></i>
                  </button> */}
                </a>
                <a
                  href={url5}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  onClick={() => {}}
                >
                  <button
                    title="Code"
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    <i className="fas fa-code"></i>
                  </button>
                </a>
                <button
                  title="Info"
                  className={styles.master__portfolio__box2__button__btn}
                  onClick={() => {
                    setPicture2(false);
                  }}
                >
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
            </div>
          ) : (
            <div
              className={
                theme == "dark"
                  ? styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__dark
                  : styles.master__portfolio__box4 +
                    " " +
                    styles.master__portfolio__box4__light
              }
              data-aos="fade-up"
            >
              <div className={styles.master__portfolio__box4__img1}>
                <div>
                  <h2 className={styles.master__portfolio__box4__img1__title}>
                    TODO LIST
                  </h2>
                  <div className={styles.master__portfolio__box4__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box4__img1__box__text
                      }
                    >
                      {t("header.todo")}
                    </h4>
                  </div>
                  <div
                    className={
                      styles.master__portfolio__box4__img1__tecnologies
                    }
                  >
                    <p>{t("header.technology")}</p>
                  </div>
                  <div className={styles.master__portfolio__box4__img1__icons}>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-react"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        React
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-js-square"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        JavaScript
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-html5"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        HTML5
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-css3-alt"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        CSS3
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.master__portfolio__box4__img1__return}
                  onClick={() => {
                    setPicture2(true);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}

          {/* BOX 5 */}

          <div className={styles.master__portfolio__box5}>
            <div className={styles.master__portfolio__box5__content}>
              <a
                data-aos="fade-up"
                href={url1}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.master__portfolio__box5__content__text}
                type="button"
                onClick={() => {}}
              >
                {t("header.works")}
                <HiArrowSmRight
                  className={
                    styles.master__portfolio__box5__content__text__icon
                  }
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
