import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

// Custom hook: encapsula useContext y valida que se use dentro del Provider.
// Así los componentes hacen `useAppContext()` en vez de repetir useContext(AppContext).
function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error("useAppContext must be used within AppProvider")
  return context
}

export default useAppContext