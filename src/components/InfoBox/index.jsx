import React from "react";
import Styles from "./styles.module.css";
import { motion } from "framer-motion";

function InfoBox({ icon, title, description, id }) {
  const x = (id + 1) % 2 === 0 ? 100 : -100;
  return (
    <motion.div
      initial={{
        y: x,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      }}
      exit={{
        x: x,
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      }}
      className={Styles.container}
    >
      {React.cloneElement(icon, { className: Styles.icon })}
      <h1 className={Styles.title}>{title}</h1>
      <p className={Styles.description}>{description}</p>
      <button className={Styles.button}>Read More</button>
    </motion.div>
  );
}

export default InfoBox;
