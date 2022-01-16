import React from "react";
import styles from "../assets/styles/header.module.css";
import logo from '../assets/icons/logo.png'

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.nav_logo}>
          <img
            className={styles.nav_logo_icon}
            src={logo}
            width="45"
            alt=" app Logo"
          />
          <span className={styles.nav_logo_text}>Product List App</span>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Header;
