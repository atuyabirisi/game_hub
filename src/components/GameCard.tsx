import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImage from "../services/image-url";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card minWidth="300px" borderRadius="10px" overflow="hidden">
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            ></PlatformIconList>
            <CriticScore game={game} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
