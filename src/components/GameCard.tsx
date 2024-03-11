import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
