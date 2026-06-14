import { Link } from "react-router"
import useAppContext from "../hooks/useAppContext"
import '../styles/ProductCard.css'

export default function ProductCard({ product }) {
  const { id, name, category, price, stock, rating, image, description } = product
  const { cart, addProduct } = useAppContext()

  const isInCart = cart.find(item => item.id === id)

  const handleClick = () => {
    if(isInCart) return
    else addProduct(product)
  }

  return (
    <article className="product-card">
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
        <button
          className="product-card__btn"
          onClick={handleClick}
        >
          {isInCart ? 'Ver carrito' : 'Agregar al carrito'}
        </button>
        <Link to={`/products/${id}`} className="product-card__details-link">
          Ver detalles
        </Link>
      </div>
    </article>
  )
}
