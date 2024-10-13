import { FaBacterium, FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const setActive = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <NavLink to="/" className={setActive}>
            Home <FaBacterium className={s.icon} />
          </NavLink>

          <NavLink to="/cart" className={setActive}>
            Cart <FaShoppingBag className={s.icon} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
