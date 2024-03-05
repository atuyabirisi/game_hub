import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

function GameCard() {
  const { results } = useSelector((store: RootState) => store.games);

  return (
    <>
      {results.map((game, index) => (
        <GameCardContainer>
          <Card key={index}>
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
