import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSleton";
import useData from "../hooks/useData";

function GameGrid() {
  const { error, isLoading } = useData("/games");
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10px"
        padding="10px"
      >
        {isLoading ? (
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        ) : (
          <GameCard />
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
