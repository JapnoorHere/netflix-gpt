import { TMDB_API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addpopularMovies } from '../utils/moviesSlice'

const usePopularMovies = async () => {

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?&page=1',
            TMDB_API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
        return () => {

        };
    }, []);
}

export default usePopularMovies;
