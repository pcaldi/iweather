import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

describe("Storage: cityStorage", () => {
  it("should be return null when don't a city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  })

  it("should be return city storage", async () => {
    const newCity: CityProps = {
      id: '1',
      name: 'Curitiba',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);


  })
})
