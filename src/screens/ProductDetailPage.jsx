import '../styles/App.css'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router'

function ProductsDetailPage() {
  // useParams lee el parámetro dinámico de la URL (/products/:productId).
  // Llega como string, por eso lo convertimos con Number() para comparar con el id.
  const { productId } = useParams()
  const product = products.find((product) => product.id === Number(productId))

  return (
    <ProductCard product={product} />
  )
}

export default ProductsDetailPage
