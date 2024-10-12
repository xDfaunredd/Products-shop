import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { selectProducts } from "../../redux/selectors";
import s from "./ProductList.module.css";

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <ul className={s.list}>
      {products?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductList;
