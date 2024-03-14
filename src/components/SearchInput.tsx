import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchText: (searchText: string) => void;
}

function SearchInput({ onSearchText }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius="30px"
          placeholder="search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
