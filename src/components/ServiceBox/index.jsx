import React from "react";
import Styles from "./styles.module.css";

function ServiceBox({ name, description, image }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.image_container}>
        <img src={image} alt="" className={Styles.image} />
      </div>
      <div className={Styles.content_container}>
        <h1 className={Styles.title}>{name}</h1>
        <p className={Styles.description}>{description}</p>
        <button className={Styles.action_button}>Learn More</button>
      </div>
    </div>
  );
}

export default ServiceBox;
