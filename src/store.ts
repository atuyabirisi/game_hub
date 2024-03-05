import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './features/gameSlice'
import genreReducer from './features/genreSlice'

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        genres: genreReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
