import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors";
import CartItem from "../CartItem/CartItem";
import s from "./CartList.module.css";

const CartList = () => {
  const items = useSelector(selectCart);
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
