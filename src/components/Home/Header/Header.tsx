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
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaHeadset } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  return (
    <>
      <Flex w="100%" mb={20}>
        <Heading fontWeight={"semibold"} color={"cyan.400"}>
          Welcome!
        </Heading>
        <Spacer></Spacer>      
        <Link marginX={2} as={NavLink} to={"/"}>
          DashBoard
        </Link>
        <Link  marginX={2} as={NavLink} to={"/categories"}>
          Categories
        </Link>
        <Link  marginX={2} as={NavLink} to={"/age-groups"}>
          Age Groups
        </Link>
        <Link  marginX={2} as={NavLink} to={"/questions"}>
          Questions
        </Link>
        <Spacer></Spacer>
        <IconButton
          aria-label="color-mode"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={5}
          aria-label="user"
          icon={<FaHeadset />}
          isRound={true}
        ></IconButton>
      </Flex>
    </>
  );
}
