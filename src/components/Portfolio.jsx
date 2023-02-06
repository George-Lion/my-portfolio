import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Portfolio.module.scss";
import { useTranslation } from "react-i18next";

import "./../components/Port.css";
import { webs } from "./../data/DataPortfolio";

function App({ theme }) {
  const [defaultImage, setDefaultImage] = useState({});
  const [t, i18n] = useTranslation("global");
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  return (
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
        <div className="all">
          <div className="Content">
            <Slider {...settings}>
              {webs.map((item, id) => (
                <a key={id} href={item.url} target="_blank">
                  <div className="card">
                    <div className="card-top">
                      <img
                        src={item.img}
                        alt={item.name}
                        onError={handleErrorImage}
                      />
                      <h1>{item.name}</h1>
                    </div>
                    <div className="card-bottom">
                      <h3></h3>
                      <span className="category"></span>
                    </div>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
