import { useDispatch } from "react-redux";
import { decrease, deleteCart, increase } from "../../redux/cartOps";
import s from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCart(item.id));
  };

  const increaseCount = () => {
    dispatch(increase(item));
  };
  const decreaseCount = () => {
    dispatch(decrease(item));
  };

  return (
    <li key={item.id} className={s.item}>
      <img src={item.thumbnail} alt="" className={s.image} />
      <p className={s.title}> {item.title}</p>
      <p className={s.price}>
        ${item.price} x {item.count} = ${item.count * item.price}
      </p>
      <div className={s.countContainer}>
        <button className={s.button} onClick={decreaseCount}>
          -
        </button>
        <p className={s.countValue}>{item.count} </p>
        <button className={s.button} onClick={increaseCount}>
          +
        </button>
      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        delete
      </button>
    </li>
  );
};

export default CartItem;
