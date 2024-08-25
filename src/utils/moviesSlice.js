import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addtrailer: (state,action)=>{
            state.trailerVideo = action.payload;
        }
        
    }
})

export const {addNowPlayingMovies, addtrailer} = moviesSlice.actions;

export default moviesSlice.reducer;
