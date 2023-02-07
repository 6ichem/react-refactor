import { FC } from "react";
import styles from "./Hero.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const Hero: FC = ({ ...rest }) => (
  <span
    className={`container ${styles.main}`}
    style={{
      margin: "50px inherit",
      display: "flex",
      justifyContent: "space-evenly",
    }}
    {...rest}
  >
    <img src={img1} style={{ maxHeight: "15em", display: "block" }} />
    <img src={img2} style={{ maxHeight: "15rem", display: "block" }} />
  </span>
);

export default Hero;
