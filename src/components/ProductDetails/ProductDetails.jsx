import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getFullProductInfo } from "../../redux/productsOps";
import { selectCurrentProduct } from "../../redux/selectors";
import { addCart } from "../../redux/cartOps";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFullProductInfo(id));
  }, [dispatch, id]);
  const location = useLocation();
  const goTo = location.state ?? "/";

  const item = useSelector(selectCurrentProduct);

  const handleClick = () => {
    dispatch(addCart(item));
  };

  return (
    <div>
      <Link to={goTo}> GO BACK TO PRODUCTS</Link>

      <img src={item?.thumbnail} alt={item?.title} />
      <div>
        <h2>{item?.title}</h2>
        <p>${item?.price}</p>

        <button onClick={handleClick} type="button">
          Add to cart
        </button>
        <h3>
          Return policy:
          {item?.returnPolicy}
        </h3>
      </div>
    </div>
  );
};

export default ProductDetails;
