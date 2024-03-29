import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  return (
    <>
      {error ? null : (
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="blue"
            >
              {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
              {data?.map((platform) => (
                <MenuItem
                  key={platform.id}
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform.slug}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      )}
    </>
  );
}

export default PlatformSelector;
