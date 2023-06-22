import React from "react";
import Styles from "./styles.module.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.navbar}>
        <img src={Logo} alt="Game Codies Logo" className={Styles.logo_img} />
        <ul className={Styles.nav_items}>
          <li className={Styles.nav_link}>Home</li>
          <li className={Styles.nav_link}>Products</li>
          <li className={Styles.nav_link}>Services</li>
          <li className={Styles.nav_link}>About</li>
          <li className={Styles.nav_link}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
