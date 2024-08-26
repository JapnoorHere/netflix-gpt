import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    const scrollableStyle = {
        overflowX: "scroll",
        msOverflowStyle: "none",  // IE and Edge
        scrollbarWidth: "none",   // Firefox
      };
      
      const webkitScrollbarStyle = `
        ::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `;

  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll"  style={scrollableStyle}>
      <style>{webkitScrollbarStyle}</style>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
