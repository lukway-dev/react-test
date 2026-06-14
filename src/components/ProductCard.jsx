import { Link } from "react-router"
import useAppContext from "../hooks/useAppContext"
import '../styles/ProductCard.css'

// `product` llega como prop desde el componente padre. Las props son de solo lectura.
export default function ProductCard({ product }) {
  const { id, name, category, price, stock, rating, image, description } = product
  const { cart, addProduct } = useAppContext()

  // Valor derivado del estado: se recalcula en cada render, no necesita su propio useState.
  const isInCart = cart.find(item => item.id === id)

  const handleClick = () => {
    if(isInCart) return
    else addProduct(product)
  }

  return (
    <article className="product-card">
      {/* En JSX, las llaves {} insertan valores de JavaScript dentro del marcado */}
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>
        <div className="product-card__footer">
          <div className="product-card__meta">
            <span className="product-card__rating">★ {rating}</span>
            <span className="product-card__stock">{stock} en stock</span>
          </div>
          <span className="product-card__price">${price.toFixed(2)}</span>
        </div>
        {/* onClick recibe la función (sin invocarla) que React ejecuta al hacer clic */}
        <button
          className="product-card__btn"
          onClick={handleClick}
        >
          {/* Operador ternario: el texto del botón depende del estado */}
          {isInCart ? 'Ver carrito' : 'Agregar al carrito'}
        </button>
        {/* <Link> navega sin recargar la página, construyendo la URL del detalle */}
        <Link to={`/products/${id}`} className="product-card__details-link">
          Ver detalles
        </Link>
      </div>
    </article>
  )
}
