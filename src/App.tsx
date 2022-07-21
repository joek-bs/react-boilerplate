import React, { ReactElement } from "react"
import Header from "./components/Header"
import SomeComponent from "./components/SomeComponent"
import { AppContextProvider } from "./AppContext"

function App(): ReactElement {
  const buttonHandler = () => {
    console.log("log")
    alert("Hi")
  }

  return (
    <AppContextProvider>
      <Header />
      <SomeComponent
        title="This is some component"
        buttonHandler={buttonHandler}
      />
    </AppContextProvider>
  )
}

export default App
