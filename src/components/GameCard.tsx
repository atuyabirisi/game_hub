import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

function GameCard() {
  const { data } = useGames();

  return (
    <>
      {data?.map((game, index) => (
        <GameCardContainer key={index}>
          <Card>
            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
              <Heading fontSize="xl">{game.name}</Heading>
              <HStack justifyContent="space-between">
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                ></PlatformIconList>
                <CriticScore game={game} />
              </HStack>
            </CardBody>
          </Card>
        </GameCardContainer>
      ))}
    </>
  );
}

export default GameCard;
