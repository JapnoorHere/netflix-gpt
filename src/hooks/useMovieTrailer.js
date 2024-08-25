import { TMDB_API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { addtrailer } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

const useMovieTrailer = (movieID)=>{
    const dispatch = useDispatch();
        const getMovieVideosFromID = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,TMDB_API_OPTIONS)
        const json = await data.json();
        console.log(json);
        
        const filterData = json.results.filter((video) => video.type === 'Trailer')
        const trailer = filterData[0];
        console.log(trailer);
        dispatch(addtrailer(trailer));
    }

    useEffect(() => {
        getMovieVideosFromID();
        return () => {
            
        };
    }, []);

}

export default useMovieTrailer;
