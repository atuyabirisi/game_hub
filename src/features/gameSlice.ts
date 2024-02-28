import { createSlice } from "@reduxjs/toolkit";

export interface Game {
    id: number;
    name: String;
    background_image: string;
}
  
interface FetchGamesResponse {
    count: number;
    results: Game[];
}
  
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