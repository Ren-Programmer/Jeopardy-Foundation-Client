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

export interface HomeProps {}

export default function Home({}: HomeProps) {
 

  return (
    // <div id="container">
    //   <Header />

    //   <Body />
    //   <Footer />
    // </div>

    // <Grid
    //   templateAreas={`"header header"
    //   "main main"

    //         `}
    //   gap={0}
    //   gridTemplateRows={"10% 90%"}
    //   // gridTemplateColumns={"1fr"}
    //   // gridTemplateAreas={"4.4em"}
    //   // gridAutoRows={"20%"}
    //   // gridAutoColumns={"1fr"}
    //   // gridAutoFlow={"20%"}
    //   height={"full"}
    //   rowGap={50}
    // >
    //   <GridItem area={"header"}>
    //     <Header />
    //     <Divider></Divider>
    //   </GridItem>
    //   <GridItem
    //   area={"main"}>
    //     <Body />
    //   </GridItem>
    //   {/* <GridItem area={"footer"}>
    //     <Footer />
    //   </GridItem> */}
    // </Grid>
    <VStack p={5}>
     <Header/>
     <Body/>    
    </VStack>
  );
}
