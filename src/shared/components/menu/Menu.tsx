import {
  Menu as CMenu,
  MenuList,
  MenuButton,
  Button,
  MenuItem,
  Link,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Fragment, ReactElement } from "react";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";

export interface MenuItemProp {
  title: string;
  to: string;
}

export interface IMenu {
  title: string;
  items: MenuItemProp[];
  icon?: ReactElement;
}
export default function Menu({ title, items, icon }: IMenu) {
  return (
    <>
      <CMenu>
        <Tooltip label={title}>
          <MenuButton
            isRound={true}
            as={IconButton}
            icon={icon}
            //colorScheme={process.env.REACT_APP_COLOR_SCHEME}
          ></MenuButton>
        </Tooltip>

        <MenuList>
          {items.map((item, index) => {
            return (
              <Fragment key={index}>
                <MenuItem as={NavLink} to={item.to}>
                  {/* <Link as={NavLink} to={item.to}>
                    {item.title}
                  </Link> */}
                  {item.title}
                </MenuItem>
              </Fragment>
            );
          })}
        </MenuList>
      </CMenu>
    </>
  );
}
