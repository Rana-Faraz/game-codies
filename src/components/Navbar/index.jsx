import React from "react";
import Styles from "./styles.module.css";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar({ current }) {
  const mobileNav = React.useRef(null);
  const [currentNav, setCurrentNav] = React.useState("");
  const [menu, setMenu] = React.useState(false);

  // React.useEffect(() => {
  //   if (current === "/") {
  //     setCurrentNav("home");
  //   } else if (current === "/about") {
  //     setCurrentNav("about");
  //   } else if (current === "/services") {
  //     setCurrentNav("services");
  //   } else if (current === "/team") {
  //     setCurrentNav("team");
  //   } else if (current === "/contact") {
  //     setCurrentNav("contact");
  //   }
  // }, [current]);

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
          <li>
            <Link
              to="/"
              className={
                current === "/"
                  ? Styles.nav_link + " " + Styles.active
                  : Styles.nav_link
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={
                current === "/team"
                  ? Styles.nav_link + " " + Styles.active
                  : Styles.nav_link
              }
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={
                current === "/services"
                  ? Styles.nav_link + " " + Styles.active
                  : Styles.nav_link
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                current === "/about"
                  ? Styles.nav_link + " " + Styles.active
                  : Styles.nav_link
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                current === "/contact"
                  ? Styles.nav_link + " " + Styles.active
                  : Styles.nav_link
              }
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className={Styles.hambuger_menu} onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className={Styles.mobile_nav_items} ref={mobileNav}>
          <button className={Styles.close_menu} onClick={toggleMenu}>
            <FaTimes />
          </button>
          <motion.ul
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            }}
            className={Styles.mobile_nav}
          >
            <li>
              <Link
                onClick={toggleMenu}
                to="/"
                className={Styles.mobile_nav_link}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/team"
                className={Styles.mobile_nav_link}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/services"
                className={Styles.mobile_nav_link}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/about"
                className={Styles.mobile_nav_link}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/contact"
                className={Styles.mobile_nav_link}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
