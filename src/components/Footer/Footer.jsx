import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.linksList}>
          <li>
            <a href="https://github.com/xDfaunredd" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-furevych/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://t.me/xDfaunredd" target="_blank">
              <BsTelegram />
            </a>
          </li>
        </ul>
        <p className={s.copyrightText}>
          © 2024 Copyright Symbol ,Inc, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
