import React, { Fragment, useState } from "react";
import img1 from "../img/Traveland1.png";
import img2 from "../img/t2.jpg";
import img3 from "../img/StarWars.jpg";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "./Portfolio.module.scss";
import { useTranslation } from "react-i18next";
import swal from "@sweetalert/with-react";
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
                src={img2}
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
                  <button
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Demo
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
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Code
                  </button>
                </a>
                <button
                  className={styles.master__portfolio__box2__button__btn}
                  onClick={() => {
                    setPicture(false);
                  }}
                >
                  info
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
                    Portfolio
                  </h2>
                  <div className={styles.master__portfolio__box4__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box4__img1__box__text
                      }
                    >
                      {t("header.wars")}
                    </h4>
                  </div>
                  <div
                    className={
                      styles.master__portfolio__box4__img1__tecnologies
                    }
                  >
                    <p>Teconologies</p>
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
                      <i className="fab fa-sass"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        Sass
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
                  <button
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Demo
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
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Code
                  </button>
                </a>
                <button
                  className={styles.master__portfolio__box2__button__btn}
                  onClick={() => {
                    setPicture1(false);
                  }}
                >
                  info
                </button>
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
                  <div
                    className={
                      styles.master__portfolio__box3__img1__tecnologies
                    }
                  >
                    <p>Teconologies</p>
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
                src={img3}
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
                  <button
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Demo
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
                    className={styles.master__portfolio__box2__button__btn}
                  >
                    Code
                  </button>
                </a>
                <button
                  className={styles.master__portfolio__box2__button__btn}
                  onClick={() => {
                    setPicture2(false);
                  }}
                >
                  info
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
                    Star Wars Blog
                  </h2>
                  <div className={styles.master__portfolio__box4__img1__box}>
                    <h4
                      className={
                        styles.master__portfolio__box4__img1__box__text
                      }
                    >
                      {t("header.wars")}
                    </h4>
                  </div>
                  <div
                    className={
                      styles.master__portfolio__box4__img1__tecnologies
                    }
                  >
                    <p>Teconologies</p>
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
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <i className="fab fa-python"></i>
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        Python
                      </p>
                    </div>
                    <div
                      className={
                        styles.master__portfolio__box4__img1__icons__text
                      }
                    >
                      <SiFlask />
                      <p
                        className={
                          styles.master__portfolio__box4__img1__icons__name
                        }
                      >
                        Flask
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
