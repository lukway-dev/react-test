import { NavLink } from "react-router"
import useAppContext from "../hooks/useAppContext"
import "../styles/Navbar.css"

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

function Navbar() {
  const { cart } = useAppContext()

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        my-app
      </NavLink>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
            Products
          </NavLink>
        </li>
      </ul>

      <NavLink to="/cart" className="navbar__cart">
        <CartIcon />
        {cart.length > 0 && (
          <span className="navbar__cart-badge">{cart.length}</span>
        )}
      </NavLink>
    </nav>
  )
}

export default Navbar
