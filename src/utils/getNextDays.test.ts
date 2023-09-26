import { getNextDays } from "./getNextDays";


test('should be return the next five days', () => {
  // Executar o teste...

  const days = getNextDays();

  expect(days.length).toBe(5);
})
