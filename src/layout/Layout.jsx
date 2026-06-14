import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

// Layout compartido por todas las rutas: la navbar es fija y <Outlet/> es el
// "hueco" donde React Router inyecta la pantalla de la ruta activa.
const Layout = () => {
  return (
    // <>...</> es un Fragment: agrupa elementos sin añadir un <div> extra al DOM.
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default Layout;