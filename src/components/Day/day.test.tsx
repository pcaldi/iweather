import { render, screen } from "@testing-library/react-native";
import { Day, DayProps } from "@components/Day";

import cloudDay from "@assets/cloudy_day.svg";


const data: DayProps = {
  day: "28/09",
  max: "25",
  min: "12",
  icon: cloudDay,
  weather: "Nublado",
};


describe("Component: Day", () => {
  it("should be return day", () => {
    render(
      <Day
        data={data}
      />
    );

    expect(screen.getByText('28/09')).toBeTruthy()
  });
})
