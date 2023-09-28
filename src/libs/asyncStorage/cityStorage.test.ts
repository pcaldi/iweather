import { getStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Storage: cityStorage", () => {
  it("should be return null when don't a city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  })
})
