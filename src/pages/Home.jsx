import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.scss";
import AboutMe from "../components/AboutMe";
import img5 from "../img/e.png";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { RiMouseFill, RiArrowDropDownLine } from "react-icons/ri";

const Lop = ({ theme }) => {
  const [t, i18n] = useTranslation("global");
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";
  let url3 = "https://www.instagram.com/geek.george/";

  /*  dark mode */

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <div
        className={
          theme == "dark"
            ? styles.body + " " + styles.body__dark
            : styles.body + " " + styles.body__light
        }
      >
        <div
          className={
            theme == "dark"
              ? styles.body__header + " " + styles.body__header__dark
              : styles.body__header + " " + styles.body__header__light
          }
        >
          <div className={styles.body__header__box}>
            <div className="" data-aos="fade-right">
              <h1 className={styles.body__header__box__myName}>Jorge León</h1>
              <p className={styles.body__header__box__mytitle}>
                Full Stack Developer
              </p>
              <div className={styles.body__header__box__icons}>
                <a
                  href={url1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    theme == "dark"
                      ? styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__dark
                      : styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__light
                  }
                  type="button"
                  onClick={() => {}}
                >
                  <i className="fab fa-github" title="Github"></i>
                </a>

                <a
                  type="button"
                  href={url2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    theme == "dark"
                      ? styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__dark
                      : styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__light
                  }
                >
                  <i className="fab fa-linkedin-in" title="Linkedin"></i>
                </a>

                <a
                  type="button"
                  href={url3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    theme == "dark"
                      ? styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__dark
                      : styles.body__header__box__icon +
                        " " +
                        styles.body__header__box__icon__light
                  }
                >
                  <i className="fab fa-instagram" title="Instagram"></i>
                </a>
              </div>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.nav__item}
              >
                <div className={styles.body__header__box__mouse}>
                  <RiMouseFill
                    className={
                      theme == "dark"
                        ? styles.body__header__box__mouse__icon1 +
                          " " +
                          styles.body__header__box__mouse__icon1__dark
                        : styles.body__header__box__mouse__icon1 +
                          " " +
                          styles.body__header__box__mouse__icon1__light
                    }
                  />

                  <p
                    className={
                      theme == "dark"
                        ? styles.body__header__box__mouse__txt +
                          " " +
                          styles.body__header__box__mouse__txt__dark
                        : styles.body__header__box__mouse__txt +
                          " " +
                          styles.body__header__box__mouse__txt__light
                    }
                  >
                    {t("header.down")}
                  </p>
                  <RiArrowDropDownLine
                    className={
                      theme == "dark"
                        ? styles.body__header__box__mouse__icon2 +
                          " " +
                          styles.body__header__box__mouse__icon2__dark
                        : styles.body__header__box__mouse__icon2 +
                          " " +
                          styles.body__header__box__mouse__icon2__light
                    }
                  />
                </div>
              </Link>
            </div>

            <div data-aos="fade-up-right">
              <img
                className={styles.body__header__box__photo1}
                src={img5}
                alt="Traveland page"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body__header__bottom}></div>

      {/* ABOUT ME */}

      <AboutMe theme={theme} />

      {/*  PORTFOLIO */}

      <Portfolio theme={theme} />

      {/* Contact */}

      <Contact />
    </Fragment>
  );
};

export default Lop;
