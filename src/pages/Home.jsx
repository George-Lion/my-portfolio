import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.scss";
import AboutMe from "../components/AboutMe";
import img5 from "../img/e.png";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import useLocalStorage from "use-local-storage";
import { Link } from "react-scroll";
import { switchTheme } from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { RiMouseFill, RiArrowDropDownLine } from "react-icons/ri";

const Lop = () => {
  const [t, i18n] = useTranslation("global");
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";
  let url3 = "https://www.instagram.com/accounts/login/";

  /*  dark mode */

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <div className={styles.header} data-theme={theme}>
        <div className={styles.header__box}>
          <div className="" data-aos="fade-right">
            <h1 className={styles.header__box__myName}>Jorge León</h1>
            <p className={styles.header__box__mytitle}>Full Stack Developer</p>
            <div className={styles.header__box__icons}>
              <a
                href={url1}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__box__icon}
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
                className={styles.header__box__icon}
              >
                <i className="fab fa-linkedin-in" title="Linkedin"></i>
              </a>
              <a
                type="button"
                href={url3}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__box__icon}
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
              <div className={styles.header__box__mouse}>
                <RiMouseFill className={styles.header__box__mouse__icon1} />

                <p>scroll down</p>
                <RiArrowDropDownLine
                  className={styles.header__box__mouse__icon2}
                />
              </div>
            </Link>
          </div>

          <div data-aos="fade-up-right">
            <img
              className={styles.header__box__photo1}
              src={img5}
              alt="Traveland page"
            />
          </div>
          <div data-aos="fade-left">
            <p className={styles.header__box__dedication}>{/*  NEXT TEXT */}</p>
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}></div>

      {/* ABOUT ME */}

      <AboutMe />

      {/*  PORTFOLIO */}

      <Portfolio />

      {/* Contact */}

      <Contact />
    </Fragment>
  );
};

export default Lop;
