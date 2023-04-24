import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { fetchItems } from '../../../app/api';
import MainPage from '../../../components/MainPage';
import { renderWithProviders } from '../../../utils/test-utils'

jest.mock('../../../app/api', () => ({
    fetchItems: jest.fn(),
}));

describe('render MainPage with List', () => {
  beforeEach(() => {
    (fetchItems as jest.Mock).mockClear();
  });

  test('renders game list', async () => {
    const data = [
      { id: 1, name: 'Game 1'},
      { id: 2, name: 'Game 2' },
    ];
    (fetchItems as jest.Mock).mockResolvedValueOnce(data);

    renderWithProviders(<MainPage />)

    await waitFor(() => {
      expect(screen.getByText('Game 1')).toBeInTheDocument();
      expect(screen.getByText('Game 2')).toBeInTheDocument();
    });

    expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});
