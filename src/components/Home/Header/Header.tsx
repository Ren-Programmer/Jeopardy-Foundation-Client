import {
  Link as RouterLink,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
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
  Menu as CMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Tooltip,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaUser, FaRegBuilding, FaHome, FaAdversal,FaGalacticRepublic } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { logOut } from "components/Account/useSecurity";
import Menu from "shared/components/menu/Menu";

export default function Header() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { claims, updateClaims, isCrudAdmin, isGameCreator } = useContext(
    AuthenticationContext
  );
  return (
    <>
      <Flex w="100%" mb={20}>
        <Heading fontWeight={"semibold"} color="telegram.300">
          Welcome!{/* Welcome! {claims[0].value} */}
        </Heading>
        <Spacer></Spacer>
        {/* <Link marginX={2} as={NavLink} to={"/"}>
          DashBoard
        </Link> */}
        <Tooltip label="Dashboard">
          <IconButton
            mr={5}
            as={NavLink}
            aria-label="color-mode"
            icon={<FaHome />}
            isRound={true}
            to="/dashboard"
          ></IconButton>
        </Tooltip>

        {/* {isCrudAdmin && ( */}
          <>
            <Menu
              title="General"
              icon={<FaRegBuilding />}
              items={[
                {
                  title: "Categories",
                  to: "/categories",
                },
                {
                  title: "Age Groups",
                  to: "/age-groups",
                },
                {
                  title: "Questions",
                  to: "/questions",
                },
              ]}
            />
          </>
          
        {/* )} */}
        {isGameCreator && (
          <>
            <Menu
              title="Game Creation"
              icon={<FaAdversal />}
              items={[
                {
                  title: "Game BluePrints",
                  to: "/game-blueprints",
                },               
              ]}
            />
             <Menu
              title="Game"
              icon={<FaGalacticRepublic />}
              items={[
                {
                  title: "Game",
                  to: "/game-instances",
                },               
              ]}
            />
          </>
        )}
        <Spacer></Spacer>
        <IconButton
          aria-label="color-mode"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
        <CMenu>
          <MenuButton
            as={IconButton}
            isRound={true}
            icon={<FaUser />}
            ml={2}
          ></MenuButton>
          <MenuList>
            <MenuItem>
              {claims.find((x) => x.property === "name")!.value as string}
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem
              onClick={() => {
                logOut(updateClaims, navigate);
              }}
            >
              Log Out
            </MenuItem>
          </MenuList>
        </CMenu>
      </Flex>
    </>
  );
}
