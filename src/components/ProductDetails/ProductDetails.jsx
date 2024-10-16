import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getFullProductInfo } from "../../redux/productsOps";
import { selectCurrentProduct } from "../../redux/selectors";
import { addCart } from "../../redux/cartOps";

import s from "./ProductDetails.module.css";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getFullProductInfo(id));
  }, [dispatch, id]);

  const goTo = location.state ?? "/";
  const item = useSelector(selectCurrentProduct);

  const handleClick = () => {
    dispatch(addCart(item));
    toast.success("Successfully added!");
  };

  return (
    <section className=" section">
      <div className="container">
        <Link to={goTo} className={s.link}>
          GO BACK TO PRODUCTS
        </Link>

        <div className={s.containerDiv}>
          <img src={item?.thumbnail} alt={item?.title} />
          <div>
            <h2 className={s.title}>{item?.title}</h2>
            <p className={s.price}>${item?.price}</p>

            <button className={s.button} onClick={handleClick} type="button">
              Add to cart
            </button>
            <h3 className={s.policy}>
              Return policy:
              {item?.returnPolicy}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
