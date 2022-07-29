import React, { Fragment } from "react";
import img1 from "../img/Traveland1.png";
import img3 from "../img/StarWars.jpg";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  let url4 = "https://traveland-v2.herokuapp.com/";

  return (
    <Fragment>
      <div className={styles.master} id="portfolio">
        <div className={styles.master__portfolio}></div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
