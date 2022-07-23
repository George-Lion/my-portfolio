import React, { useState, useEffect } from "react";
import AOS from "aos";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
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
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.nav__item}
              >
                About me
              </Link>
            </div>
            <div data-aos="fade-left">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.nav__item}
              >
                Portfolio
              </Link>
            </div>
            <div data-aos="fade-left">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.nav__item}
              >
                Skills
              </Link>
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

export default Navbar;
