import React from 'react'
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); 
  if(!movies) return;
  const mainMovies = movies[0];
  const {id, original_title, overview} = mainMovies;
 
  return (
    <div>
       <VideoTitle title={original_title} overview={overview}/>
       <VideoBackground movie_id={id}/>       
    </div>
  )
}

export default MainContainer;

