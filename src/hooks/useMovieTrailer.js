import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice"


const useMovieTrailer = (movie_id) => {
  const trailerVideo =  useSelector((store)=>store.movies?.trailerVideo);
  
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();    
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addMovieTrailer(trailer));
   
  };
  useEffect(() => {
      !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
