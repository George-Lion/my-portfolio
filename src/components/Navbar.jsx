import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  const [state, setState] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <div data-aos="zoom-in">
            <span className={styles.logo}>
              <i className="fab fa-gg-circle"></i>
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
                  Portfolio
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
                  className={state == true ? styles.nav__btn : styles.nav__btn2}
                  onClick={() => {
                    i18n.changeLanguage("es");
                    setState(true);
                  }}
                >
                  ESP
                </button>
                <div className={styles.nav__bar}></div>
                <button
                  className={
                    state == false ? styles.nav__btn : styles.nav__btn2
                  }
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setState(false);
                  }}
                >
                  ENG
                </button>
              </div>
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
export const switchTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
};
export default Navbar;
