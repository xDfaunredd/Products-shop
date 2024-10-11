import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Cart from "../../pages/Cart/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/productsOps";
import ProductDetails from "../ProductDetails/ProductDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
