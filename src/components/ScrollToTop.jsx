import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 850) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.topBtn}>
      {" "}
      {showTopBtn && (
        <FaAngleUp className={styles.iconPosition} onClick={goToTop} />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
