import { createContext, useEffect, useState } from "react"

export const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  // const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const localCart = sessionStorage.getItem("cart")
    if (localCart) setCart(JSON.parse(localCart))
  }, [])

  console.log(cart)

  const updateCart = (newCart) => {
    setCart(newCart)
    sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  const addProduct = (product) => {
    const newCart = [...cart, product]

    updateCart(newCart)
  }
  const editProduct = (product) => {
    // const currentProduct = cart.find(item => item.id === product.id)
    // const newProduct = {
    //   ...currentProduct,
    //   product
    // }

    const newCart = [...cart]
    const productIndex = cart.findIndex(item => item.id === product.id)

    newCart[productIndex] = product

    updateCart(newCart)
  }
  const deleteProduct = (id) => {
    const productIndex = cart.findIndex(item => item.id === id)
    const newCart = cart.splice(productIndex, 1)

    updateCart(newCart)
  }
  const cleanCart = () => {
    updateCart([])
  }

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