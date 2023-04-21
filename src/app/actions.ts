// import { Dispatch } from 'redux';
// import { Game } from './types';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
// export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
// export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';

// const API_KEY = '26d5061e875a4301900d772501fa5bf9';
// const baseUrl = 'https://api.rawg.io/api/games';

// interface FetchGamesRequestAction {
//   type: typeof FETCH_GAMES_REQUEST;
// }

// interface FetchGamesSuccessAction {
//   type: typeof FETCH_GAMES_SUCCESS;
//   payload: Game[];
// }

// interface FetchGamesFailureAction {
//   type: typeof FETCH_GAMES_FAILURE;
//   payload: string;
// }

// export type GamesAction =
//   | FetchGamesRequestAction
//   | FetchGamesSuccessAction
//   | FetchGamesFailureAction;

// // export const fetchGames = (page: number): ((dispatch: Dispatch<GamesAction>) => Promise<void>) => {
// //   return async (dispatch: Dispatch<GamesAction>) => {
// //     dispatch({ type: FETCH_GAMES_REQUEST });

// //     const url = `${baseUrl}?page=${page}&page_size=10&ordering=-rating&key=${API_KEY}`;
// //     try {
// //       const response = await fetch(url);
// //       if (!response.ok) {
// //         throw new Error(`Failed to fetch games. Status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       const games = data.results.map((result: any) => ({
// //         id: result.id,
// //         name: result.name,
// //         // Add any additional properties you need to map here
// //       }));
// //       dispatch({ type: FETCH_GAMES_SUCCESS, payload: games });
// //     } catch (error) {
// //       dispatch({ type: FETCH_GAMES_FAILURE, payload: error.message });
// //     }
// //   };
// };

// export const fetchGames = createAsyncThunk('get/games', async ():Promise<[Game]> => {
//       const url = `${baseUrl}?page=${page}&page_size=10&ordering=-rating&key=${API_KEY}`;

//   const response = await fetch(url);
//   return await response.json();
// })

import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

import { fetchItems } from './api';

export const SET_ITEMS = 'SET_ITEMS';

interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: {
    games: any[];
  };
}

export type ItemAction = SetItemsAction;

export const setGames = (games: any[]): SetItemsAction =>{
  
  console.log('setItems', games);
  
  return ({
  type: SET_ITEMS,
  payload: { games }
})};

export const fetchItemsAction = (
  apiKey: string,
  page: number,
  // itemsPerPage?: number
): ThunkAction<void, RootState, unknown, ItemAction> => {
  return async (dispatch) => {
    const games = await fetchItems(apiKey, page);    
    dispatch(setGames(games));
  };
};
