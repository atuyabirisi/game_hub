import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

function GenreList() {
  const { data } = useGenre();

  return (
    <>
      {
        <List>
          {data?.map((genre, index) => (
            <ListItem key={index} paddingY="10px">
              <HStack>
                <Image
                  src={getCroppedImage(genre.image_background)}
                  boxSize="32px"
                  borderRadius="10px"
                />
                <Text fontSize="larger">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      }
    </>
  );
}

export default GenreList;
