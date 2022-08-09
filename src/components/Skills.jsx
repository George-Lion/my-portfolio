import React, { Fragment } from "react";
import styles from "./Skills.module.scss";
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
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const Skills = ({ theme }) => {
  return (
    <Fragment>
      <div
        className={
          theme == "dark"
            ? styles.title + " " + styles.title__dark
            : styles.title + " " + styles.title__light
        }
      >
        Skills
        <div className={styles.title__line}></div>
      </div>
      <div className={styles.skills}>
        {/* UI */}

        <div className={styles.skills__div1}>
          <div
            className={styles.skills__div1__title}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>UI design</h4>
          </div>

          <div className={styles.skills__div1__box__icons}>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-figma"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Figma
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiAdobexd />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Adobe XD
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <DiPhotoshop />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Photoshop
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <DiIllustrator />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Illustrator
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fas fa-mobile-alt"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Responsive web
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FRONTEND */}

        <div className={styles.skills__div1}>
          <div
            className={styles.skills__div1__title}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Frontend</h4>
          </div>

          <div className={styles.skills__div1__box__icons}>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-html5"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  HTML5
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-css3-alt"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  CSS3
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-js-square"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  JavaScript
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-react"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  React
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-sass"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Sass
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-bootstrap"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Bootstrap
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BACKEND */}

        <div className={styles.skills__div1}>
          <div
            className={styles.skills__div1__title}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Backend</h4>
          </div>

          <div className={styles.skills__div1__box__icons}>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-python"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Python
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <i className="fab fa-npm"></i>
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  NPM
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiPostgresql />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  PostgreSQL
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiFlask />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Flask
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiMysql />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Mysql
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiWindowsterminal />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Comand Line
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROL DE VERSIONES */}

        <div className={styles.skills__div1}>
          <div
            className={styles.skills__div1__title}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Version control</h4>
          </div>

          <div className={styles.skills__div1__box__icons}>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiGit />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Git
                </p>
              </div>
            </div>
            <div
              className={
                theme == "dark"
                  ? styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__dark
                  : styles.skills__div1__box__icons__icon +
                    " " +
                    styles.skills__div1__box__icons__icon__light
              }
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <SiGithub />
              <div data-aos="fade-up">
                <p className={styles.skills__div1__box__icons__icon__title1}>
                  Github
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
