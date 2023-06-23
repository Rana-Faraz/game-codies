import React from "react";
import Styles from "./styles.module.css";
import { motion } from "framer-motion";

function ServiceBox({ name, description, image, id }) {
  const x = id % 2 === 0 ? 100 : -100;
  return (
    <motion.div
      initial={{
        x: x,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
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
      <div className={Styles.image_container}>
        <img src={image} alt="" className={Styles.image} />
      </div>
      <div className={Styles.content_container}>
        <h1 className={Styles.title}>{name}</h1>
        <p className={Styles.description}>{description}</p>
        <button className={Styles.action_button}>Learn More</button>
      </div>
    </motion.div>
  );
}

export default ServiceBox;
