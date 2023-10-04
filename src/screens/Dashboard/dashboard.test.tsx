import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Dashboard", () => {

  // Defino com o beforeAll, o que vai ser executado antes dos testes.
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Matinhos, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city);
  })

  it("should be show city weather.", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />)


    const cityName = await waitFor(() => screen.findByText(/matinhos/i));
    expect(cityName).toBeTruthy()

  });

  it("should be show another selected weather city.", async () => {

    /*
    1 - Buscar informações do clima/tempo da cidade selecionada.
    2 - Buscar informações da cidade.
    3 - Buscar informações do clima/tempo da nova cidade selecionada.
    */

    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });


    render(<Dashboard />)

    // Remover o Loading do componente.
    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));


    const cityName = 'Curitiba'

    await waitFor(() => act(() => {
      const search = screen.getByTestId("search-input")
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }));

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();


  });




})

