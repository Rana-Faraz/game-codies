import React from "react";
import Styles from "./styles.module.css";
import Data from "../../assets/data/services-data.json";
import ServiceBox from "../../components/ServiceBox";
import GameDesign from "../../assets/images/game-design.jpg";
import GameDevelopment from "../../assets/images/development.jpg";
import ASO from "../../assets/images/aso.jpg";
import Marketing from "../../assets/images/marketing.jpg";

function Services() {
  const images = [GameDesign, GameDevelopment, ASO, Marketing];
  return (
    <div
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className={Styles.container}>
        <h3 className={Styles.subtitle}>Services</h3>
        <h1 className={Styles.title_2}>Exquisite Offerings</h1>
        <div className={Styles.services_container}>
          {Data.map((service, i) => (
            <ServiceBox
              {...service}
              image={images[i]}
              key={service.id}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
