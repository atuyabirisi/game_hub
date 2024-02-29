import { createSlice } from "@reduxjs/toolkit";
import { FetchGamesResponse } from "../hooks/useGames";
  
const initialState: FetchGamesResponse = {
    count: 0,
    results: [],
}
  
const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        gamesSet: ((state, action) => {
            const { count, results } = action.payload;
            state.results = results;
            state.count = count;
        }),
    },
});
  
export const { gamesSet } = gameSlice.actions;
export default gameSlice.reducer;