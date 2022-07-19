import React, { useContext, useState } from "react"

export const AppContext = React.createContext()
export const AppContextUpdate = React.createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function useAppContextUpdate() {
  return useContext(AppContextUpdate)
}

export function AppContextProvider({ children }) {
  // GLOBAL STATES
  const [loaded, setLoaded] = useState(false)

  // STATE HANDLERS
  function loadedStateHandler(value) {
    setLoaded(value)
    console.log("ctx triggered")
  }

  // WRAPPER SETUP
  return (
    <AppContext.Provider
      value={{
        loaded,
      }}
    >
      <AppContextUpdate.Provider value={{ loadedStateHandler }}>
        {children}
      </AppContextUpdate.Provider>
    </AppContext.Provider>
  )
}
