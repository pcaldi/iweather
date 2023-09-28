import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";



describe("Service: getCityByNameService", () => {
  it("should be return city details.", async () => {



    // Mock na API
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const resolve = await getCityByNameService("Curitiba");


    expect(resolve.length).toBeGreaterThan(0);

  });
});
