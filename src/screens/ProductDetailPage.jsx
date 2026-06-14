import '../styles/App.css'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router'

function ProductsDetailPage() {
  const { productId } = useParams()
  const product = products.find((product) => product.id === Number(productId))

  return (
    <ProductCard product={product} />
  )
}

export default ProductsDetailPage
