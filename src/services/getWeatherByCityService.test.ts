
import { api } from "./api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { getWeatherByCityService } from "./getWeatherByCityService"


describe("Service: getWeatherByCityService", () => {

  it("should be return weather api data formatted. ", async () => {

    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    const resolve = await getWeatherByCityService({ latitude: 123, longitude: 456 })

    expect(resolve).toHaveProperty("today");

  });
});
