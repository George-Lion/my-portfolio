import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import img1 from "../img/LOGO.png";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { HiSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";

const Navbar = ({ theme, setTheme }) => {
  const [t, i18n] = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  const [state, setState] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div
        className={
          theme == "dark"
            ? styles.header + " " + styles.header__dark
            : styles.header + " " + styles.header__light
        }
      >
        <div className={styles.header__content}>
          <div data-aos="zoom-in">
            <span
              className={
                theme == "dark"
                  ? styles.logo + " " + styles.logo__dark
                  : styles.logo + " " + styles.logo__light
              }
            >
              <img src={img1} className={styles.header__content__log} alt="" />
            </span>
          </div>
          <div>
            <nav
              className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
            >
              <div data-aos="fade-left">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={styles.nav__item}
                >
                  <p>{t("header.about-me")}</p>
                </Link>
              </div>
              <div data-aos="fade-left">
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={styles.nav__item}
                >
                  <p>{t("header.projects")}</p>
                </Link>
              </div>
              <div data-aos="fade-left">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={styles.nav__item}
                >
                  {t("header.contact")}
                </Link>
              </div>
              <div data-aos="fade-left" className={styles.nav__item}>
                <button
                  title="translate to spanish"
                  className={
                    state == true
                      ? styles.nav__item__btn
                      : styles.nav__item__btn2
                  }
                  onClick={() => {
                    i18n.changeLanguage("es");
                    setState(true);
                  }}
                >
                  ESP
                </button>
                <div
                  className={
                    theme == "dark"
                      ? styles.nav__bar + " " + styles.nav__bar__dark
                      : styles.nav__bar + " " + styles.nav__bar__light
                  }
                ></div>
                <button
                  title="translate to english"
                  className={
                    state == false
                      ? styles.nav__item__btn
                      : styles.nav__item__btn2
                  }
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setState(false);
                  }}
                >
                  ENG
                </button>
              </div>
              {/* <button
                title="change mode"
                className={
                  theme == "dark" ? styles.header__dark : styles.header__light
                }
                onClick={() => {
                  setTheme();
                }}
              >
                {theme == "dark" ? (
                  <HiSun className={styles.iconlight} />
                ) : (
                  <RiMoonClearFill className={styles.iconlight} />
                )}
              </button> */}
            </nav>
          </div>
          <div>
            <button className={styles.header__toggler} onClick={menuToggler}>
              {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
