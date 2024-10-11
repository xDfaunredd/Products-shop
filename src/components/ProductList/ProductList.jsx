import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { selectProducts } from "../../redux/selectors";

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <ul>
      {products?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductList;
