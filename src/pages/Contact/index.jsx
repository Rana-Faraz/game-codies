import React from "react";
import Styles from "./styles.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className={Styles.container}>
        <h3 className={Styles.subtitle}>Contact</h3>
        <h1 className={Styles.title_2}>Connect With Us</h1>
        <div className={Styles.split_container}>
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            {/* Address */}
            <div className={Styles.contact_container}>
              <div className={Styles.icon}>
                <FaMapMarkerAlt />
              </div>
              <div className={Styles.contact}>
                <h1 className={Styles.info}>
                  128/4, Block M, Quaid-e-Azam Industrial Estate, Lahore
                </h1>
              </div>
            </div>
            {/* Phone Number */}
            <div className={Styles.contact_container}>
              <div className={Styles.icon}>
                <FaPhoneAlt />
              </div>
              <div className={Styles.contact}>
                <h1 className={Styles.info}>+92 323 9000577</h1>
              </div>
            </div>
            {/* Email */}
            <div className={Styles.contact_container}>
              <div className={Styles.icon}>
                <FaEnvelope />
              </div>
              <div className={Styles.contact}>
                <h1 className={Styles.info}>info@getflystudios.com</h1>
              </div>
            </div>
          </div>
          <form className={Styles.form}>
            <div className={Styles.row}>
              <input type="text" placeholder="Name" className={Styles.input} />
              <input
                type="email"
                placeholder="Email"
                className={Styles.input}
              />
            </div>
            <input type="text" placeholder="Subject" className={Styles.input} />
            <textarea placeholder="Message" className={Styles.input} />
            <button className={Styles.button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
