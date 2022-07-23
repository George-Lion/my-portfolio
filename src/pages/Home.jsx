import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.scss";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";

const Lop = () => {
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";
  let url3 = "https://www.instagram.com/accounts/login/";

  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div className={styles.header}>
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
          </div>
          <div data-aos="fade-up-right">
            <img
              className={styles.header__box__photo1}
              src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Traveland page"
            />
          </div>
          <p className={styles.header__box__dedication}>
            {" "}
            Full Stack Developer y diseñador UI. Viviendo en Madrid-España.
          </p>
        </div>
      </div>

      {/* ABOUT ME */}

      <AboutMe />

      {/*  PORTFOLIO */}

      <Portfolio />

      {/* SKILLS */}

      <div className={styles.skills} id="skills">
        <p className={styles.skills__title}>Skills</p>
        <div className={styles.skills__box}>
          <div className={styles.skills__box__frontEnd}>
            <div className={styles.skills__box__frontEnd__title}>
              <h4>Frontend</h4>
            </div>
            <div className={styles.skills__box__frontEnd__icons}>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-html5"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-js-square"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-react"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-figma"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-sass"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fab fa-bootstrap"></i>
              </div>
              <div className={styles.skills__box__frontEnd__icons__icon}>
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
          </div>

          {/* BACKEND */}

          <div className={styles.skills__box__backEnd}>
            <div className={styles.skills__box__backEnd__title}>
              <h4>Backend</h4>
            </div>
            <div className={styles.skills__box__backEnd__icons}>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-python"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-npm"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-js-square"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-react"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-figma"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-sass"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fab fa-bootstrap"></i>
              </div>
              <div className={styles.skills__box__backEnd__icons__icon}>
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lop;
