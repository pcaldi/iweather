import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"

describe("Screen: Dashboard", () => {
  it("should be show city weather.", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'Matinhos, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)

    render(<Dashboard />)


    const cityName = await waitFor(() => screen.findByText(/matinhos/i));
    expect(cityName).toBeTruthy()

  })
})

