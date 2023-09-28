import { NextDays } from "@components/NextDays";
import { render, screen } from "@testing-library/react-native";

import cloudDay from "@assets/cloudy_day.svg";

const data = [{
  day: "28/09",
  max: "25",
  min: "12",
  icon: cloudDay,
  weather: "Nublado",
}];

describe("Component: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={data}
      />)
    expect(screen.getByText("28/09")).toBeTruthy();
  });
});
