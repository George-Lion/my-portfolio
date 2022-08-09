import React, { Fragment } from "react";
import img1 from "../img/Traveland1.png";
import img3 from "../img/StarWars.jpg";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "./Portfolio.module.scss";
import { Link } from "react-scroll";
let url1 = "https://github.com/George-Lion";
import { useTranslation } from "react-i18next";

const Portfolio = ({ theme }) => {
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
            <div className={styles.master__portfolio__box1__line}></div>
          </div>
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
              src="http://lh6.ggpht.com/-YENNFxijkjs/UbVW_PKcClI/AAAAAAAAYqY/nqrkLNeNJDA/image%25255B2%25255D.png?imgmax=800"
              alt=""
            />
          </div>
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
          </div>
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
              src="http://vanimg.s3.amazonaws.com/orange-8.jpg"
              alt=""
            />
          </div>

          <div className={styles.master__portfolio__box5}>
            <a
              data-aos="fade-up"
              href={url1}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.master__portfolio__box5__text}
              type="button"
              onClick={() => {}}
            >
              {t("header.works")}
              <HiArrowSmRight
                className={styles.master__portfolio__box5__text__icon}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
