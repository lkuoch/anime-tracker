import React, { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <Menu>
      <MenuButton>Actions</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Header;
