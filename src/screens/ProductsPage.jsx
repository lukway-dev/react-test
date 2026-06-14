import '../styles/App.css'
import ProductList from '../components/ProductList'

// Composición: una pantalla puede ser tan simple como reutilizar otro componente.
function ProductsPage() {
  return (
    <ProductList />
  )
}

export default ProductsPage
