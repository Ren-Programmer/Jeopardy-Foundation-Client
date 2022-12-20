import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { useLocation, useNavigation, useParams } from "react-router";
import GameBlock from "./game-block/GameBlock";
import GameValues from "./game-value/GameValues";
import useGameCreation from "./useGameCreation";

export interface IGameDesign {}
export default function GameDesign({}: IGameDesign) {
  const width = [1, 2, 3, 4, 5];
  const length = [1, 2, 3, 4, 5];
  const values = [100, 300, 500, 800, 1000];

  const { colorMode, questionValues, loading, game, categories } =
    useGameCreation();
  if (loading) {
    return <>Loading</>;
  }
  return (
    <>
      <Stack
        width={"100%"}
        bg={colorMode === "dark" ? "gray.700" : "whiteAlpha.100"}
        p="5"
        rounded={"md"}
        boxShadow={"md"}
      >
        <Center mb={50}>
          <Heading>{game.title}</Heading>
        </Center>

        <Grid templateColumns={"1fr repeat(5,4fr)"} gap={2}>
          <GridItem w="100%">
            <GameValues values={questionValues} />
          </GridItem>
          {/* <GridItem w="100%" h="10" bg="telegram.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" /> */}
          {categories.map((category) => {
            return (
              <GridItem key={category.id} w="100%" bg="telegram.500">
                <GameBlock categoryName={category.name} />
              </GridItem>
            );
          })}
        </Grid>
        {/* <Flex>
        <GameValues values={values} />
      </Flex> */}
      </Stack>
    </>
  );
}
