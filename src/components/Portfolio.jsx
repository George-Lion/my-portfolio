import React, { Fragment } from "react";
import img1 from "../img/Traveland1.png";
import img3 from "../img/StarWars.jpg";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  let url4 = "https://traveland-v2.herokuapp.com/";
  return (
    <Fragment>
      <div className={styles.portfolio} id="portfolio">
        <div>
          <p className={styles.portfolio__title}>- Portfolio</p>
        </div>

        <div
          className={styles.portfolio__services}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className={styles.portfolio__services__card}>
            <div className={styles.portfolio__services__card__head}>
              <a
                type="button"
                href={url4}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.portfolio__services__card__head}
                  src={img1}
                />
              </a>
            </div>
            <div className={styles.portfolio__services__card__down}>
              <h3 className={styles.portfolio__services__card__down__title}>
                Traveland web app.
              </h3>
              <div className={styles.portfolio__services__card__down__tecno}>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  JavaScript
                </h5>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  React
                </h5>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  CSS
                </h5>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  Python
                </h5>
              </div>
              <div className={styles.portfolio__services__card__down__links}>
                <a
                  className={
                    styles.portfolio__services__card__down__links__link
                  }
                  href="https://github.com/George-Lion/FINAL-PROJECT-X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                <a
                  className={
                    styles.portfolio__services__card__down__links__link
                  }
                  href={url4}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Webside
                </a>
              </div>
            </div>
          </div>

          {/*  CARD 2 */}

          <div className={styles.portfolio__services__card}>
            <div className={styles.portfolio__services__card__head}>
              <a
                type="button"
                href={url4}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.portfolio__services__card__head}
                  src={img3}
                />
              </a>
            </div>
            <div className={styles.portfolio__services__card__down}>
              <h3 className={styles.portfolio__services__card__down__title}>
                Stars Wars block API.
              </h3>
              <div className={styles.portfolio__services__card__down__tecno}>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  JavaScript
                </h5>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  React
                </h5>
                <h5
                  className={
                    styles.portfolio__services__card__down__tecno__code
                  }
                >
                  CSS
                </h5>
              </div>
              <div className={styles.portfolio__services__card__down__links}>
                <a
                  className={
                    styles.portfolio__services__card__down__links__link
                  }
                  href="https://github.com/George-Lion/Starwars-Blog-Reading-List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                <a
                  className={
                    styles.portfolio__services__card__down__links__link
                  }
                  href={url4}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Webside
                </a>
              </div>
            </div>
          </div>

          {/*  CARD 3 */}

          <div className={styles.portfolio__services__card}>
            <div className={styles.head}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
