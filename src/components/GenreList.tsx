import useGenre from "../hooks/useGenre";

function GenreList() {
  const { data } = useGenre();

  return (
    <>
      {
        <ul>
          {data?.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default GenreList;
