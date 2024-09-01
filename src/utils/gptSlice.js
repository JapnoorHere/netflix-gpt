import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearchView: false,
        movieNames : null,
        movieResults : null,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearchView = !state.showGPTSearchView;
         },
         addAIMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
         }
    }
})

export const { toggleGPTSearchView, addAIMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
