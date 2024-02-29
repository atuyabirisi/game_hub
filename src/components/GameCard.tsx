import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import PlatformIconList from "./PlatformIconList";

function GameCard() {
  const { results } = useSelector((store: RootState) => store.games);
  return (
    <>
      {results.map((game, index) => (
        <Card borderRadius={10} overflow="hidden" key={index}>
          <Image src={game.background_image} />
          <CardBody>
            <Heading fontSize="xl">{game.name}</Heading>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default GameCard;
