import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        playingMovies: null
    },
    reducers: {
        addNowPlayngMovies: (state, action) => {
            state.playingMovies = action.payload
        }
    }
})

export const { addNowPlayngMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;