import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "."

describe("<HeaderComponent />", () => {
  it("displays the header", async () => {
    render(<Header title="My Company" />)

    const header = await screen.findByText("My Company")

    // some jest-dom examples
    expect(header).toBeInTheDocument()
    expect(header).toBeVisible()
  })
})
