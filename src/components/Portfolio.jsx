import React, { Fragment } from "react";
import img1 from "../img/Traveland1.png";
import img2 from "../img/travel1.png";
import img3 from "../img/StarWars.jpg";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "./Portfolio.module.scss";
import { useTranslation } from "react-i18next";

const Portfolio = ({ theme }) => {
  let url1 = "https://github.com/George-Lion?tab=repositories";
  let url2 = "https://github.com/George-Lion/FINAL-PROJECT-X";
  let url3 = "https://github.com/George-Lion/Starwars-Blog-Reading-List";
  let url4 = "https://traveland-v2.herokuapp.com/";

  const [t, i18n] = useTranslation("global");

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

          <div
            className={
              theme == "dark"
                ? styles.master__portfolio__box2 +
                  " " +
                  styles.master__portfolio__box2__dark
                : styles.master__portfolio__box2 +
                  " " +
                  styles.master__portfolio__box2__light
            }
            data-aos="fade-up"
          >
            <img
              className={styles.master__portfolio__box2__img3}
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
                <button className={styles.master__portfolio__box2__button__btn}>
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
                <button className={styles.master__portfolio__box2__button__btn}>
                  Code
                </button>
              </a>
              <button className={styles.master__portfolio__box2__button__btn}>
                more info
              </button>
            </div>
          </div>

          {/* BOX 3 */}

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
                <button className={styles.master__portfolio__box2__button__btn}>
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
                <button className={styles.master__portfolio__box2__button__btn}>
                  Code
                </button>
              </a>
              <button className={styles.master__portfolio__box2__button__btn}>
                more info
              </button>
            </div>
          </div>

          {/* BOX 4 */}

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
              className={styles.master__portfolio__box2__img3}
              src={img3}
              alt=""
            />

            <div className={styles.master__portfolio__box2__button}>
              <a
                href={url3}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                onClick={() => {}}
              >
                <button className={styles.master__portfolio__box2__button__btn}>
                  Demo
                </button>
              </a>
              <a
                href={url3}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                onClick={() => {}}
              >
                <button className={styles.master__portfolio__box2__button__btn}>
                  Code
                </button>
              </a>
              <button className={styles.master__portfolio__box2__button__btn}>
                more info
              </button>
            </div>
          </div>

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
