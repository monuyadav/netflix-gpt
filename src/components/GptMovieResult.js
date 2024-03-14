import React from 'react'
import MovieList from "./MovieList";

const GptMovieResult = ({ movieNames, movieResults }) => {
  return (
    
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
     
        {movieNames.map((movieName, index) => (
            
            <>
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
          </>
        ))}
      </div>
    </div>


  );
};

export default GptMovieResult;