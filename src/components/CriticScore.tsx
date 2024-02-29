import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Prop {
  game: Game;
}

function CriticScore({ game }: Prop) {
  const { metacritic } = game;
  let color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";

  return (
    <>
      <Badge
        px="10px"
        borderRadius="10px"
        backgroundColor="gray.500"
        color="teal.300"
        colorScheme={color}
      >
        {metacritic}
      </Badge>
    </>
  );
}

export default CriticScore;
