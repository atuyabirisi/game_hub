import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  value: string;
  label: string;
}

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedOrder: SortOrder | null;
}

function SortSelector({ onSelectSortOrder, selectedOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating " },
    { value: "-updated", label: "Updated Date " },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} colorScheme="blue">
        Order By: {selectedOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, index) => (
          <MenuItem onClick={() => onSelectSortOrder(order)} key={index}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
