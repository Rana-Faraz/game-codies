import React from "react";
import Styles from "./styles.module.css";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const mobileNav = React.useRef(null);
  const [menu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    if (menu) {
      mobileNav.current.className =
        Styles.mobile_nav_items + " " + Styles.active;
    } else {
      mobileNav.current.className = Styles.mobile_nav_items;
    }
  }, [menu]);
  return (
    <motion.div className={Styles.container}>
      <div className={Styles.navbar}>
        <img src={Logo} alt="Game Codies Logo" className={Styles.logo_img} />
        <ul className={Styles.nav_items}>
          <li className={Styles.nav_link}>Home</li>
          <li className={Styles.nav_link}>Products</li>
          <li className={Styles.nav_link}>Services</li>
          <li className={Styles.nav_link}>About</li>
          <li className={Styles.nav_link}>Contact</li>
        </ul>
        <button className={Styles.hambuger_menu} onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className={Styles.mobile_nav_items} ref={mobileNav}>
          <button className={Styles.close_menu} onClick={toggleMenu}>
            <FaTimes />
          </button>
          <ul className={Styles.mobile_nav}>
            <li className={Styles.mobile_nav_link}>Home</li>
            <li className={Styles.mobile_nav_link}>Products</li>
            <li className={Styles.mobile_nav_link}>Services</li>
            <li className={Styles.mobile_nav_link}>About</li>
            <li className={Styles.mobile_nav_link}>Contact</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
