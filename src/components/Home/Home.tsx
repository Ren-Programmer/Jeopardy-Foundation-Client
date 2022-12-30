import {
  Box,
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
  theme,
  useColorMode,
  VStack,
  withDefaultColorScheme,
  extendTheme
} from "@chakra-ui/react";

import { Button } from "styles/buttonStyles";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { FaMoon, FaSun, FaHeadset } from "react-icons/fa";
import { useContext } from "react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import Login from "components/Account/Login";
import { useNavigate } from "react-router";
import AppContext from "Contexts/AppContext";

export interface HomeProps {}

export default function Home({}: HomeProps) {
  //const Button = SetButtonStyles("orange");
   const { ToastContainer, toast } = createStandaloneToast();
     const theme = extendTheme(
    withDefaultColorScheme({ colorScheme: "telegram" }),
    {
      components: {
        Button
      },
    }
  );
  return (
    <AppContext.Provider value={{ toast }}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <VStack p={5}>
          <Body />
        </VStack>
        <ToastContainer />
      </ChakraProvider>
    </AppContext.Provider>
  );
}
