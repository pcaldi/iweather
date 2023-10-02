import { Search } from ".";
import { api } from "@services/api"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";

describe('Screen: Search', () => {
  it('should be show options city.', async () => {

    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.changeText(searchInput, 'Curitiba');

    const option = await waitFor(() => screen.findByText(/Curitiba/i));

    expect(option).toBeTruthy();
  })
})
