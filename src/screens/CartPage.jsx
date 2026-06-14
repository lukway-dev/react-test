import useAppContext from '../hooks/useAppContext'

function CartPage() {
  const { cart, deleteProduct, cleanCart } = useAppContext()

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={cleanCart}>Vaciar carrito</button>
    </div>
  )
}

export default CartPage
