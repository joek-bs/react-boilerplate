import React, { ReactElement } from "react"

type Props = {
  title?: string
}

function Header({ title = "Company Name" }: Props): ReactElement {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}

export default Header
