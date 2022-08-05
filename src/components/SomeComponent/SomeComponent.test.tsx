import SomeComponent from "."
import React from "react"
import { render, screen } from "@testing-library/react"
import { AppContextProvider } from "../../AppContext"

describe("<SomeComponent />", () => {
  it("displays the passed title", async () => {
    render(
      <AppContextProvider>
        <SomeComponent title="testTitle" />
      </AppContextProvider>
    )

    const header = await screen.findByText("testTitle")

    // some jest-dom examples
    expect(header).toBeInTheDocument()
    expect(header).toBeVisible()
  })
})
