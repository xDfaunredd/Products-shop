import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Header from "../Header/Header";

const Home = lazy(() => import("../../pages/Home/Home"));
const Cart = lazy(() => import("../../pages/Cart/Cart"));
const ProductDetails = lazy(() => import("../ProductDetails/ProductDetails"));

import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/productsOps";
import Footer from "../Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className="wrapper">
        <Header />

        <Suspense fallback={<h2>...Loading</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
