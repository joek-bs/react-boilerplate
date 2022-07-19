import SomeComponent from "."
import React from "react"
import { render, screen } from "@testing-library/react"

describe("<SomeComponent />", () => {
  it("displays the header", async () => {
    render(<SomeComponent title="testTitle" buttonHandler={jest.fn()} />)

    const header = await screen.findByText("Hello World")

    // some jest-dom examples
    expect(header).toBeInTheDocument()
    expect(header).toBeVisible()
  })
})
