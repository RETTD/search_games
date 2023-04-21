import React, { useEffect } from 'react';
import { fetchGames } from '../app/actions';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const GameList = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state: any) => state.games.games);
  const loading = useAppSelector((state: any) => state.games.loading);
  const error = useAppSelector((state: any) => state.games.error);

  useEffect(() => {
    dispatch(fetchGames(1));
  }, [dispatch]);
  useAppSelector
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game: any) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
