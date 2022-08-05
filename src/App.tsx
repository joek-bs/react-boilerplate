import React, { ReactElement } from "react"
import Header from "./components/Header"
import SomeComponent from "./components/SomeComponent"
import { AppContextProvider } from "./AppContext"

function App(): ReactElement {
  return (
    <AppContextProvider>
      <Header />
      <SomeComponent title="This is some component" />
    </AppContextProvider>
  )
}

export default App
