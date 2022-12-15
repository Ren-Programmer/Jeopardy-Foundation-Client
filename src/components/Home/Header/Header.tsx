import { Link as RouterLink, NavLink, Outlet } from "react-router-dom";
//import "./Header.css";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  ListItem,
  Spacer,
  UnorderedList,
  useColorMode,
  Link,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { logOut } from "components/Account/useSecurity";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { claims, updateClaims } = useContext(AuthenticationContext);
  return (
    <>
      <Flex w="100%" mb={20}>
        <Heading fontWeight={"semibold"} color={"cyan.400"}>
          Welcome!{/* Welcome! {claims[0].value} */}
        </Heading>
        <Spacer></Spacer>
        <Link marginX={2} as={NavLink} to={"/"}>
          DashBoard
        </Link>
        <Link marginX={2} as={NavLink} to={"/categories"}>
          Categories
        </Link>
        <Link marginX={2} as={NavLink} to={"/age-groups"}>
          Age Groups
        </Link>
        <Link marginX={2} as={NavLink} to={"/questions"}>
          Questions
        </Link>
        <Spacer></Spacer>
        <IconButton
          aria-label="color-mode"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
        <Menu>
          <MenuButton>
            <IconButton
              ml={5}
              aria-label="user"
              icon={<FaUser />}
              isRound={true}
            ></IconButton>
          </MenuButton>
          <MenuList>
            <MenuItem>
              {claims.find((x) => x.property === "name")!.value as string}
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem
              onClick={() => {
                logOut(updateClaims);
              }}
            >
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}
