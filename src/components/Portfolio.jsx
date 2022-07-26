import React, { Fragment } from "react";
import img1 from "../img/Traveland1.png";
import img3 from "../img/StarWars.jpg";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  let url4 = "https://traveland-v2.herokuapp.com/";
  return (
    <Fragment>
      <div className={styles.master} id="portfolio">
        <div className={styles.master__portfolio}>
          <div>
            <p className={styles.master__portfolio__title}>Portfolio</p>
          </div>
          <div className={styles.master__portfolio__box}>
            <div className={styles.master__portfolio__box__cards}>
              {/* card1 */}
              <div
                className={styles.master__portfolio__box__cards__card__card1}
              >
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container
                  }
                >
                  <img
                    className={
                      styles.master__portfolio__box__cards__card__container__img
                    }
                    src={img1}
                    alt="las vegas"
                  />
                </div>
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container__details
                  }
                >
                  <h3
                    className={
                      styles.master__portfolio__box__cards__card__container__details__title
                    }
                  >
                    Las Vegas
                  </h3>
                  <p
                    className={
                      styles.master__portfolio__box__cards__card__container__details__text
                    }
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium dignissimos, minus aperiam adipisci
                    exercitationem.
                  </p>
                </div>
              </div>

              {/* card2 */}

              <div
                className={styles.master__portfolio__box__cards__card__card1}
              >
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container
                  }
                >
                  <img
                    className={
                      styles.master__portfolio__box__cards__card__container__img
                    }
                    src={img3}
                    alt="las vegas"
                  />
                </div>
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container__details
                  }
                >
                  <h3
                    className={
                      styles.master__portfolio__box__cards__card__container__details__title
                    }
                  >
                    Las Vegas
                  </h3>
                  <p
                    className={
                      styles.master__portfolio__box__cards__card__container__details__text
                    }
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium dignissimos, minus aperiam adipisci
                    exercitationem.
                  </p>
                </div>
              </div>

              {/* card3 */}

              <div
                className={styles.master__portfolio__box__cards__card__card1}
              >
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container
                  }
                >
                  <img
                    className={
                      styles.master__portfolio__box__cards__card__container__img
                    }
                    src={img1}
                    alt="las vegas"
                  />
                </div>
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container__details
                  }
                >
                  <h3
                    className={
                      styles.master__portfolio__box__cards__card__container__details__title
                    }
                  >
                    Las Vegas
                  </h3>
                  <p
                    className={
                      styles.master__portfolio__box__cards__card__container__details__text
                    }
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium dignissimos, minus aperiam adipisci
                    exercitationem.
                  </p>
                </div>
              </div>

              {/* card4 */}

              <div
                className={styles.master__portfolio__box__cards__card__card1}
              >
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container
                  }
                >
                  <img
                    className={
                      styles.master__portfolio__box__cards__card__container__img
                    }
                    src={img1}
                    alt="las vegas"
                  />
                </div>
                <div
                  className={
                    styles.master__portfolio__box__cards__card__container__details
                  }
                >
                  <h3
                    className={
                      styles.master__portfolio__box__cards__card__container__details__title
                    }
                  >
                    Las Vegas
                  </h3>
                  <p
                    className={
                      styles.master__portfolio__box__cards__card__container__details__text
                    }
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium dignissimos, minus aperiam adipisci
                    exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
