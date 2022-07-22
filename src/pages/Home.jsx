import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../img/Traveland1.png";
import img2 from "../img/me.png";
import img3 from "../img/StarWars.jpg";
import pdf from "../resources/Jorge_Leon_CV.pdf";
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

      <div className={styles.bloc2}>
        <div className={styles.bloc2__me} data-aos="fade-up">
          About me
        </div>
        <div className={styles.bloc2__content}>
          <div data-aos="zoom-out-right">
            <img className={styles.bloc2__content__picture1} src={img2} />
          </div>
          <div className={styles.bloc2__content__box1} data-aos="fade-up-left">
            <p className={styles.bloc2__content__box1__text1}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
            <div>
              <a
                className={styles.bloc2__content__box1__button}
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Jorge_Leon_CV.pdf"
                title="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  PORTFOLIO */}

      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <p className={styles.title}>Portfolio</p>
      </div>

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

        {/*  CARD 2 */}

        <div className={styles.services__card}>
          <div className={styles.services__card__head}>
            <a
              type="button"
              href={url4}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.services__card__head} src={img3} />
            </a>
          </div>
          <div className={styles.services__card__down}>
            <h3 className={styles.services__card__down__title}>
              Stars Wars block API.
            </h3>
            <div className={styles.services__card__down__tecno}>
              <h5 className={styles.services__card__down__tecno__code}>
                JavaScript
              </h5>
              <h5 className={styles.services__card__down__tecno__code}>
                React
              </h5>
              <h5 className={styles.services__card__down__tecno__code}>CSS</h5>
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

        {/*  CARD 3 */}

        <div className={styles.services__card}>
          <div className={styles.head}></div>
        </div>
      </div>

      {/* SKILLS */}

      <div className={styles.skills} data-aos="fade-up">
        <p className={styles.title}>Skills</p>
        <div className={styles.skills__box}>
          <div className={styles.skills__box__frontEnd}>
            <div className={styles.skills__box__frontEnd__icon}>
              <i className="fab fa-html5"></i>
            </div>
            <div className={styles.skills__box__frontEnd__icon}>
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className={styles.skills__box__frontEnd__icon}>
              <i className="fab fa-js-square"></i>
            </div>
            <div className={styles.skills__box__frontEnd__icon}>
              <i className="fab fa-react"></i>
            </div>
            <div className={styles.skills__box__frontEnd__icon}>
              <i className="fab fa-figma"></i>
            </div>
          </div>
          <div className={styles.skills__box__backEnd}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Lop;
