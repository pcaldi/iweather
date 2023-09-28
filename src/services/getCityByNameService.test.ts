import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";



describe("API: getCityByNameService", () => {
  it("should be return city details.", async () => {

    const data = {
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

    // Mock na API
    jest.spyOn(api, "get").mockResolvedValue({ data });

    const resolve = await getCityByNameService("Curitiba");

    expect(resolve.length).toBeGreaterThan(0);

  });
});
