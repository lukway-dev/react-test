import products from '../data/products.json'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <section className="product-list">
      {/* Renderizar listas: .map() transforma cada dato en un componente.
          `key` debe ser único y estable: ayuda a React a identificar qué cambió. */}
      {products.map((product, index) => (
        <ProductCard key={`ProductCard-${product.id}-${index}`} product={product} />
      ))}
    </section>
  )
}
