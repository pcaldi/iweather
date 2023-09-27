import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Curitiba", latitude: 123, longitude: 321 },
      { id: "2", name: "Campo Largo", latitude: 456, longitude: 789 }
    ];

    // Mock
    const onPress = jest.fn();

    render(<SelectList
      data={data}
      onChange={() => { }}
      onPress={onPress}
    />);


    /*
      RegEx => Podemos utilizar regex para realizar buscas mais abrangentes no nosso componente, passando o "/" no inicio ou no final da palavra, adicionado  o "i" ele vai ignorar o case sensitive da palavra, podendo ser tanto maiúscula como minuscula.
    */
    const selectedCity = screen.getByText(/campo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[1]);

  });


  it("not should be show options when data props is empty.", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => { }}
        onPress={() => { }}
      />
    );
    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  })

});
