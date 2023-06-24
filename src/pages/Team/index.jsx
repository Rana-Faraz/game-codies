import Styles from "./styles.module.css";
import Halo from "../../assets/images/halo.png";
import bakground from "../../assets/images/team-bg.jpg";
import { motion } from "framer-motion";

function Team() {
  return (
    <>
      <div className={Styles.container}>
        <img src={bakground} alt="" className={Styles.landing_image} />
        <div className={Styles.landing_container}>
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            className={Styles.title}
          >
            Meet our team of <u className={Styles.underline}>Creators</u>,{" "}
            <u className={Styles.underline}>Designers</u> and world-class{" "}
            <u className={Styles.underline}>Problem Solvers</u>
          </motion.h1>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            className={Styles.bg_image_container}
          >
            <img src={Halo} alt="" className={Styles.bg_image} />
          </motion.div>
        </div>
      </div>
      <div className={Styles.content_container}>
        <h1 className={Styles.title_2}>Our Team</h1>
        <div className={Styles.team_container}>
          {/* Team Members */}
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
          <div className={Styles.team_member}>
            <div className={Styles.team_member_image_container}>
              <img src={Halo} alt="" className={Styles.team_member_image} />
            </div>
            <h1 className={Styles.team_member_name}>John Doe</h1>
            <p className={Styles.team_member_description}>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
