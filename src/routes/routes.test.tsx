import { render, waitFor, screen } from "@testing-library/react-native"
import { Routes } from "."


describe("Routes", () => {
  it("should be render search screen when not city selected.", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();

  })
})
