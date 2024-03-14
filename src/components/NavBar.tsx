import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchText2: (serachText: string) => void;
}

function NavBar({ onSearchText2 }: Props) {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearchText={(searchText) => onSearchText2(searchText)} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
