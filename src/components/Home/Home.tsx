import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { FaMoon, FaSun, FaHeadset } from "react-icons/fa";
import { useContext } from "react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import Login from "components/Account/Login";
import { useNavigate } from "react-router";

export interface HomeProps {}

export default function Home({}: HomeProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthenticationContext);
  // if (!isAuthenticated) {
  //   //navigate("/login");
  //   return null;
  // }
  return (
    <VStack p={5}>
      {isAuthenticated && <Header />}
      <Body />
    </VStack>
  );
}
