import React from "react";
import Styles from "./styles.module.css";
import InfoBox from "../../components/InfoBox";
import { FaPencilRuler } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { PiPlant, PiWrenchFill } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import Data from "../../assets/data/info-data.json";

function WhyUs() {
  const icons = [
    <FaPencilRuler key={1} />,
    <VscDebugConsole key={2} />,
    <PiPlant key={3} />,
    <MdSupportAgent key={4} />,
    <IoShareSocialSharp key={5} />,
    <PiWrenchFill key={6} />,
  ];
  return (
    <div>
      <div className={Styles.container}>
        <h1 className={Styles.title_2}>Why Choose Us</h1>
        <p className={Styles.subtitle}>
          if you’re looking for a gaming software house that provides
          top-quality Development, Designing, ASO, and Marketing services, look
          no further than us.
        </p>
        <div className={Styles.info_container}>
          {Data.map((item, index) => (
            <InfoBox
              key={index}
              icon={icons[index]}
              title={item.name}
              description={item.description}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
