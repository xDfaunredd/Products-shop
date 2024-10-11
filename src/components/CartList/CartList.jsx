import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const items = useSelector(selectCart);
  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
