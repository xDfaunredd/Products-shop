import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchCart } from "../../redux/cartOps";
import CartList from "../../components/CartList/CartList";
import { selectAmount } from "../../redux/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectAmount);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <section className="section">
      <div className="container">
        <div>
          <h2>Cart:</h2>
          <p>Total sum: ${totalAmount.toFixed(2)} </p>
          <CartList />
        </div>
      </div>
    </section>
  );
};

export default Cart;
