import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './contexts/AppContext.jsx'
import { BrowserRouter } from 'react-router'
import Router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Router/>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)