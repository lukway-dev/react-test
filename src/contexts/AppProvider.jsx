import { useState } from "react"
import { AppContext } from "./AppContext"

// El Provider es un componente que envuelve la app y reparte `value` a sus hijos.
// `children` son los componentes que quedan dentro de <AppProvider>...</AppProvider>.
export function AppProvider({ children }) {
  // useState con función inicializadora ("lazy init"): se ejecuta solo en el primer render.
  // Restauramos el carrito guardado en la sesión del navegador como estado inicial.
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  })

  // Único punto que escribe el estado: actualiza React y persiste en sessionStorage a la vez.
  const updateCart = (newCart) => {
    setCart(newCart)
    sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  // El estado en React es inmutable: en vez de modificar `cart`, creamos un array nuevo.
  const addProduct = (product) => {
    const newCart = [...cart, product]
    updateCart(newCart)
  }

  const editProduct = (product) => {
    const newCart = [...cart]
    const productIndex = cart.findIndex(item => item.id === product.id)
    newCart[productIndex] = product
    updateCart(newCart)
  }

  // filter devuelve un array nuevo sin mutar el original (splice mutaría `cart`).
  const deleteProduct = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    updateCart(newCart)
  }

  const cleanCart = () => {
    updateCart([])
  }

  // Lo que se comparte con toda la app: estado + funciones para modificarlo.
  const value = {
    cart,
    addProduct,
    editProduct,
    deleteProduct,
    cleanCart
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
