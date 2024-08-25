import { TMDB_API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = async () => {

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            TMDB_API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
        return () => {

        };
    }, []);
}

export default useNowPlayingMovies;
