import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchCart } from "../../redux/cartOps";
import CartList from "../../components/CartList/CartList";
import { selectAmount } from "../../redux/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectAmount);
  console.log(totalAmount);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <h2>Cart:</h2>
      <p>Total sum: ${totalAmount.toFixed(2)} </p>
      <CartList />
    </div>
  );
};

export default Cart;
