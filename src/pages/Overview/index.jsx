import React from "react";
import Styles from "./styles.module.css";
import Image from "../../assets/images/2.jpg";
import { motion } from "framer-motion";

function Overview() {
  return (
    <div className={Styles.container}>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.8,
        }}
        className={Styles.left_side}
      >
        <h3 className={Styles.subtitle}>Overview</h3>
        <h1 className={Styles.title_2}>Defying Boundaries</h1>
        <p>
          At our groundbreaking game studio, we merge innovation and imagination
          to create unforgettable gaming experiences. Our team of visionary
          designers, talented developers, and passionate storytellers push
          boundaries and redefine the gaming landscape.
        </p>
        <p>
          With cutting-edge technology, we craft captivating worlds filled with
          excitement and adventure. We engage with our community, embracing
          player-driven narratives and continuously evolving our experiences
          based on feedback.
        </p>
        <button className={Styles.action_button}>Services</button>
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.8,
        }}
        className={Styles.right_side}
      >
        <img src={Image} alt="" className={Styles.image} width={"100%"} />
      </motion.div>
    </div>
  );
}

export default Overview;
