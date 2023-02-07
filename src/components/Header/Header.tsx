import { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/droppe-logo.png";

const Header: FC = ({ ...rest }) => (
  <div className={styles.header} {...rest}>
    <div className={`container ${styles.headerImageWrapper}`}>
      <img src={logo} className={styles.headerImage} />
    </div>
  </div>
);

export default Header;
