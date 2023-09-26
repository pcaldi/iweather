import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it('should be return the next five days', () => {
    // Executar o teste...

    const days = getNextDays();

    expect(days.length).toBe(5);
  });

});
