import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si"; // exemplo de ícone central
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <SiCodeproject />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  );
}

export default Footer;
