import React from "react";
import Styles from "./styles.module.css";

function InfoBox({ icon, title, description }) {
  return (
    <div className={Styles.container}>
      {React.cloneElement(icon, { className: Styles.icon })}
      <h1 className={Styles.title}>{title}</h1>
      <p className={Styles.description}>{description}</p>
      <button className={Styles.button}>Read More</button>
    </div>
  );
}

export default InfoBox;
