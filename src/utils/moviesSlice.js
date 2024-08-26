import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        nowPlayingMovies: null,
        popularMovies:null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addpopularMovies: (state,action)=>{
            state.popularMovies= action.payload;
        },
        addtrailer: (state,action)=>{
            state.trailerVideo = action.payload;
        }
        
    }
})

export const {addNowPlayingMovies, addtrailer, addpopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
