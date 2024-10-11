import { FaBacterium, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <FaBacterium />
        </Link>
      </nav>

      <Link to="/cart">
        <FaShoppingBag />
      </Link>
    </header>
  );
};

export default Header;
