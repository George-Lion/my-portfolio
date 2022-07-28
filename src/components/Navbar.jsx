import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  /* dark mode */

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div className={styles.header} data-theme={theme}>
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
                  className={styles.nav__btn}
                  onClick={() => i18n.changeLanguage("es")}
                >
                  ES
                </button>
                <button
                  className={styles.nav__btn}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  EN
                </button>
              </div>
              <div data-aos="fade-left">
                <div className="theme-toggle">
                  <i onClick={switchTheme} className="fas fa-toggle-on"></i>
                </div>
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
