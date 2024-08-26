import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return null;
    const mainMovie= movies[1];
    console.log(mainMovie);
    
    const {original_title, overview, id} = mainMovie;

    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id} />
        </>
    )
}

export default MainContainer
