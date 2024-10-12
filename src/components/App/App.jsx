import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Header from "../Header/Header";

const Home = lazy(() => import("../../pages/Home/Home"));
const Cart = lazy(() => import("../../pages/Cart/Cart"));
const ProductDetails = lazy(() => import("../ProductDetails/ProductDetails"));

import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/productsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense fallback={<h2>...Loading</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
