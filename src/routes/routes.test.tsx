
import { Routes } from "."
import { api } from "@services/api";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render, waitFor, screen, act } from "@__tests__/utils/customRender"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";


describe("Routes", () => {
  it("should be render search screen when not city selected.", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();

  });

  it("should be render dashboard screen when city selected.", async () => {

    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'Curitiba',
      latitude: 123,
      longitude: 321
    };

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);
    expect(title).toBeTruthy();


  });
})
