import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './contexts/AppProvider.jsx'
import { BrowserRouter } from 'react-router'
import Router from './router/Router.jsx'

// Punto de entrada: React "monta" toda la app dentro del <div id="root"> del index.html.
// Los proveedores se anidan: cada uno envuelve a los de adentro y les ofrece sus datos.
//   BrowserRouter -> habilita el enrutado por URL
//   AppProvider   -> expone el estado global (carrito) vía Context
//   Router        -> decide qué pantalla mostrar según la URL
createRoot(document.getElementById('root')).render(
  // StrictMode: solo en desarrollo, ayuda a detectar errores comunes (no afecta producción).
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Router/>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)