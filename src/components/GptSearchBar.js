import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import GptMovieResult from "./GptMovieResult"
import { useState } from "react";



const GptSearchBar = () => { 
 const searchText = useRef(null);
 
 const [tmdbResultData, SettmdbResultData] = useState(false);
 const [movieNames, SetmovieNames] = useState(false);

    // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

    const handelSearchBar = async () => {       
        const searchTextValue = searchText.current.value;
        
        const gptMovies = searchTextValue.split(",");

        
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
 
  // (tmdbResults)?( SettmdbResultData(tmdbResults), SetmovieNames(gptMovies) ) : "";

      
       if(tmdbResults) {
            SettmdbResultData(tmdbResults);
            SetmovieNames(gptMovies);
        }else{
            return false;
        }
    
   
 



    }

  return (
    <div>
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className=" w-1/2 bg-black grid grid-cols-12">
        <input
           ref={searchText} 
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button onClick={handelSearchBar} className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
         Search
        </button>
      </form>
    </div>
    {(tmdbResultData) && ( <> <GptMovieResult movieNames={movieNames} movieResults={tmdbResultData} /> </>)}
    </div>
  );
};
export default GptSearchBar;