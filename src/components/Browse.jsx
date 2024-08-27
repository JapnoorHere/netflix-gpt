import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    const showGPTSearchView = useSelector(store => store.gpt.showGPTSearchView);

    return (
        <>
            <Header />
            {
                showGPTSearchView ? (
                    <GPTSearch />
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }
        </>
    )
}

export default Browse
