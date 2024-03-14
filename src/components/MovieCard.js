import { MOVIE_IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movieid, posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={MOVIE_IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;