import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data } = usePlatforms();

  return (
    <Box py="5px">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          colorScheme="blue"
        >
          Platforms
        </MenuButton>
        <MenuList>
          {data?.map((data) => (
            <MenuItem key={data.id}>{data.slug}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
