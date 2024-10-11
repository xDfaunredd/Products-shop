import { Link, useLocation } from "react-router-dom";

const ProductItem = ({ item }) => {
  const location = useLocation();

  return (
    <li>
      <Link state={location} to={`products/${item.id}`}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}$</p>
      </Link>
    </li>
  );
};

export default ProductItem;
