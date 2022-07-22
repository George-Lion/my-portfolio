import React, { useState, useEffect } from "react";
import AOS from "aos";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div data-aos="zoom-in">
          <span className={styles.logo}>
            <i className="fab fa-gg-circle"></i>
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <div data-aos="fade-left">
              <a className={styles.nav__item} href={"/"}>
                Home
              </a>
            </div>
            <div data-aos="fade-left">
              <a className={styles.nav__item} href={"/"}>
                Skills
              </a>
            </div>
            <div data-aos="fade-left">
              <a className={styles.nav__item} href={"/"}>
                Portfolio
              </a>
            </div>
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
