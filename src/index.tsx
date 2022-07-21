import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.scss"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={false}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)
