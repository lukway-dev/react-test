import products from '../data/products.json'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <section className="product-list">
      {products.map((product, index) => (
        <ProductCard key={`ProductCard-${product.id}-${index}`} product={product} />
      ))}
    </section>
  )
}
