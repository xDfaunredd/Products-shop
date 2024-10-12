import { FaBacterium, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Link to="/" className={s.link}>
            Home <FaBacterium className={s.icon} />
          </Link>

          <Link to="/cart" className={s.link}>
            Cart <FaShoppingBag className={s.icon} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
