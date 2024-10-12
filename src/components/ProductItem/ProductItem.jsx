import { Link, useLocation } from "react-router-dom";
import s from "./ProductItem.module.css";
const ProductItem = ({ item }) => {
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link state={location} to={`products/${item.id}`} className={s.link}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}$</p>
      </Link>
    </li>
  );
};

export default ProductItem;
