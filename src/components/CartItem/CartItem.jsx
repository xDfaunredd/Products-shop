import { useDispatch } from "react-redux";
import { decrease, deleteCart, increase } from "../../redux/cartOps";

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
    <li key={item.id}>
      <img src={item.thumbnail} alt="" />
      <p> {item.title}</p>
      <p>${item.count * item.price}</p>
      <div>
        <button onClick={decreaseCount}>-</button>
        <p>{item.count} </p>
        <button onClick={increaseCount}>+</button>
      </div>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default CartItem;
