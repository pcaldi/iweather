import { CityAPIResponse } from '@services/getCityByNameService'


export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Curitiba",
  sys: {
    country: "BR"
  },
  coord: {
    lon: 123,
    lat: 456
  }
}
