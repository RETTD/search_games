import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';
const API_KEY = "26d5061e875a4301900d772501fa5bf9"
const baseUrl = 'https://api.rawg.io/api/games';

export const fetchGames = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_GAMES_REQUEST });
  const url = `${baseUrl}?page=${page}&page_size=10&ordering=-rating&key=${API_KEY}`;
  
    axios.get(url)
      .then(response => {
        const games = response.data.results;
        dispatch({ type: FETCH_GAMES_SUCCESS, payload: games });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({ type: FETCH_GAMES_FAILURE, payload: errorMessage });
      });
  };
};
