import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
   
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </>
    )
}

export default Browse
