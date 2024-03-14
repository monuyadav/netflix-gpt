import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header/>

      {showGptSearch ? ( <GptSearch/> ) : (<> <MainContainer/>
      <SecondaryContainer/>  </>)}
      
          
    </div>
  )
}
