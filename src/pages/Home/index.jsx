import React from "react";
import Styles from "./styles.module.css";
import bakground from "../../assets/landing-background.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className={Styles.container}>
      <img src={bakground} alt="" width={"100%"} className={Styles.bg_image} />
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
        className={Styles.content}
      >
        <h1 className={Styles.title}>Game Codies</h1>
        <h1 className={Styles.title_2}>
          Igniting <u>Adventures</u>, Inspiring <u>Gamers</u>
        </h1>
        <p className={Styles.description}>
          <i>
            Where Imagination Unleashes Limitless Worlds: Crafting Gaming
            Legends.
          </i>
        </p>
        <button className={Styles.btn}>Contact Us</button>
      </motion.div>
    </div>
  );
}

export default Home;
