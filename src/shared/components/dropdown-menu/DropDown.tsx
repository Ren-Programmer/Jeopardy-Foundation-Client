import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { ReactElement } from "react";

export interface IDropDownItem {
  title: string;
  onClick: () => void;
}

export interface IDropDown {
  title: string;
  items: IDropDownItem[];
  icon?: ReactElement;
}
export default function DropDown({ items, title, icon }: IDropDown) {
  return (
    <>
      <Menu>
        {icon && (
          <>
            <Tooltip label={title}>
              <MenuButton as={IconButton} icon={icon}></MenuButton>
            </Tooltip>
          </>
        )}
        {!icon && (
          <>
            <MenuButton> {title}</MenuButton>
          </>
        )}
        <MenuList>
          {items.map((item, index) => {
            return (
              <>
                <MenuItem onClick={item.onClick}>{item.title}</MenuItem>
              </>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
}
