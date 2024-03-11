import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
// }

function GenreList() {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  return (
    <>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="lg"
        />
      ) : (
        <List>
          {data?.map((genre, index) => (
            <ListItem key={index} paddingY="10px">
              <HStack>
                <Image
                  src={getCroppedImage(genre.image_background)}
                  boxSize="32px"
                  borderRadius="10px"
                />
                <Button fontSize="larger" variant="link" display="flex">
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default GenreList;
