import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games?.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
