import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import {gameReducer} from './reducers';



export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: gameReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof gameReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;