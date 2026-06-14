import { Route, Routes } from "react-router";
import HomePage from "../screens/HomePage";
import ProductsPage from "../screens/ProductsPage";
import Layout from "../layout/Layout";
import ProductsDetailPage from "../screens/ProductDetailPage";
import CartPage from "../screens/CartPage";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default Router;