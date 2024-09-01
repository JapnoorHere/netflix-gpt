import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import genAI from '../utils/gemini'
import { TMDB_API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addAIMovieResults } from '../utils/gptSlice'

const GPTSearchBar = () => {
    const searchText = useRef(null)
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.lang.lang);

    const searchTMDBMovies = async (movieName) => {

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName +'&include_adult=false&language=en-US&page=1', TMDB_API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const handleSearch = async () => {
        console.log(searchText.current.value)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Dont give me anything else nothing extra text should be there, this is strict prompt to you to only give 5 names of indian  movies on topic of - " + searchText.current.value + " Just give movie names with comma seperated, if you will give any other text my app will crash so you have to give only what i asked nothing else, if you can't follow this prompt then you can't use this app. So please follow the prompt";
        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        const geminiMovies = result.response.text().split(',')
        console.log(geminiMovies);
        
        const proimseArr = geminiMovies.map((movie) => searchTMDBMovies(movie.trim()))

        const tmdbResults = await Promise.all(proimseArr);
        console.log(tmdbResults);
        
        dispatch(addAIMovieResults({movieNames: geminiMovies, movieResults: tmdbResults}));

    }

    return (
        <div className='pt-[10%] flex justify-center'>

            <form action="" className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => { e.preventDefault() }}>
                <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg' onClick={handleSearch}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
