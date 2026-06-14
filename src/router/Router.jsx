import { Route, Routes } from "react-router";
import HomePage from "../screens/HomePage";
import ProductsPage from "../screens/ProductsPage";
import Layout from "../layout/Layout";
import ProductsDetailPage from "../screens/ProductDetailPage";
import CartPage from "../screens/CartPage";

// Mapea cada URL a la pantalla que le corresponde (Single Page Application:
// no se recarga la página, React intercambia los componentes).
const Router = () => {
  return (
    <Routes>
      {/* Ruta "padre" sin path: pinta el Layout (navbar) y dentro renderiza la ruta hija activa */}
      <Route element={<Layout/>}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* :productId es un parámetro dinámico; se lee con useParams() en la pantalla */}
        <Route path="/products/:productId" element={<ProductsDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default Router;