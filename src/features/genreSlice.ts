import { createSlice } from "@reduxjs/toolkit";
import { FetchGenreResponse } from "../hooks/useGenre";

const initialState: FetchGenreResponse = {
    count: 0,
    results: []
}

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenres: ((state, action) => {
            const { count, results } = action.payload;
            state.count = count;
            state.results= results;
        }),
    },
});

export default genreSlice.reducer;
export const { setGenres } = genreSlice.actions;