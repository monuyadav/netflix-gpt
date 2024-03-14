
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constant"; 

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL}/>
      </div>
      <GptSearchBar />
    
    </div>
  );
};
export default GPTSearch;