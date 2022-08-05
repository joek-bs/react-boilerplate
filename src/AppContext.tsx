import React, { ReactElement, useContext, useState } from "react"

interface AppContextValuesType {
  loaded: boolean
}
interface AppContextUpdateType {
  loadedStateHandler: (arg1: boolean) => void
}
type ProviderChildrenType = { children: ReactElement[] | ReactElement }

export const AppContextValues =
  React.createContext<AppContextValuesType | null>(null)
export const AppContextUpdate =
  React.createContext<AppContextUpdateType | null>(null)

export function useAppValuesContext(): AppContextValuesType {
  return useContext(AppContextValues)
}

export function useAppUpdateContext(): AppContextUpdateType {
  return useContext(AppContextUpdate)
}

export function AppContextProvider({ children }: ProviderChildrenType) {
  // GLOBAL STATES
  const [loaded, setLoaded] = useState<boolean>(false)

  // STATE HANDLERS
  function loadedStateHandler(value: boolean): void {
    setLoaded(value)
  }

  // WRAPPER SETUP
  return (
    <AppContextValues.Provider
      value={{
        loaded,
      }}
    >
      <AppContextUpdate.Provider value={{ loadedStateHandler }}>
        {children}
      </AppContextUpdate.Provider>
    </AppContextValues.Provider>
  )
}
