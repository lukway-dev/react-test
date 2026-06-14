import { createContext } from "react"

// Objeto Context aislado en su propio archivo: lo importan tanto el Provider
// como el hook useAppContext. Separarlo del componente Provider mantiene
// funcionando el Fast Refresh de Vite (recarga en caliente al editar).
export const AppContext = createContext(null)
