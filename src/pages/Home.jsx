import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../img/Traveland1.png";
import styles from "./Home.module.scss";

const Lop = () => {
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";
  let url3 = "https://www.instagram.com/accounts/login/";
  let url4 = "https://traveland-v2.herokuapp.com/";

  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.header__box}>
          <div className="" data-aos="fade-right">
            <h1 className={styles.header__myName}>Hola, Soy Jorge</h1>
            <p className={styles.header__mytitle}>Full Stack Developer</p>
            <div className={styles.header__icons}>
              <a
                href={url1}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__icon}
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
                className={styles.header__icon}
              >
                <i className="fab fa-linkedin-in" title="Linkedin"></i>
              </a>
              <a
                type="button"
                href={url3}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__icon}
              >
                <i className="fab fa-instagram" title="Instagram"></i>
              </a>
            </div>
          </div>
          <div data-aos="fade-up">
            <img
              className={styles.header__photo1}
              src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Traveland page"
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <p className={styles.title}>Portfolio</p>
      </div>

      {/*  PORTFOLIO */}

      <div
        className={styles.services}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className={styles.services__card}>
          <div className={styles.services__card__head}>
            <a
              type="button"
              href={url4}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.services__card__head} src={img1} />
            </a>
          </div>
          <div className={styles.services__card__down}>
            <h3 className={styles.services__card__down__title}>
              Traveland web app.
            </h3>
            <div className={styles.services__card__down__tecno}>
              <h5 className={styles.services__card__down__tecno__code}>
                JavaScript
              </h5>
              <h5 className={styles.services__card__down__tecno__code}>
                React
              </h5>
              <h5 className={styles.services__card__down__tecno__code}>CSS</h5>
              <h5 className={styles.services__card__down__tecno__code}>
                Python
              </h5>
            </div>
            <div className={styles.services__card__down__links}>
              <a
                className={styles.services__card__down__links__link}
                href="https://github.com/George-Lion/FINAL-PROJECT-X"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a
                className={styles.services__card__down__links__link}
                href={url4}
                target="_blank"
                rel="noopener noreferrer"
              >
                Webside
              </a>
            </div>
          </div>
        </div>
        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
      </div>

      {/* HABILIDADES */}

      <div data-aos="fade-up">
        <p className={styles.title}>Habilidades</p>
      </div>
      <div className={styles.skills}></div>
    </Fragment>
  );
};

export default Lop;
