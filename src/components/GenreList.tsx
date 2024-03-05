import { useSelector } from "react-redux";
import useGenre from "../hooks/useGenre";
import { RootState } from "../store";

function GenreList() {
  useGenre();
  const { results } = useSelector((store: RootState) => store.genres);

  return (
    <>
      {
        <ul>
          {results?.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default GenreList;
