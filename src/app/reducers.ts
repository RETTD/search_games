import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from './actions';

interface InitialState {
  loading: boolean;
  games: any[];
  error: string | null;
}

const initialState: InitialState = {
  loading: false,
  games: [],
  error: null,
};

const gameReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        games: action.payload,
        error: null,
      };
    case FETCH_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducers;
