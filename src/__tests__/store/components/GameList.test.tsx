import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { fetchItems } from '../../../app/api';
import GameList from '../../../components/MainPage';
import { renderWithProviders } from '../../../utils/test-utils'

jest.mock('../../../app/api', () => ({
    fetchItems: jest.fn(),
}));

describe('GameList', () => {
  beforeEach(() => {
    (fetchItems as jest.Mock).mockClear();
  });

  test('renders game list', async () => {
    const data = [
      { id: 1, name: 'Game 1', rating: 4.5 },
      { id: 2, name: 'Game 2', rating: 3.8 },
    ];
    (fetchItems as jest.Mock).mockResolvedValueOnce(data);

    renderWithProviders(<GameList />)

    // expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Game 1')).toBeInTheDocument();
      expect(screen.getByText('Game 2')).toBeInTheDocument();
    });

    expect(fetchItems).toHaveBeenCalledTimes(1);
    expect(fetchItems).toHaveBeenCalledWith(1);
    });
});
