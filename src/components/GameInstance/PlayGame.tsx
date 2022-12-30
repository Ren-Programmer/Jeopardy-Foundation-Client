import {
  Box,
  Center,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import GameValues from "components/GameCreation/game-value/GameValues";
import PlayGameContext from "Contexts/PlayGameContext";
import { Fragment } from "react";
import { SetButtonStyles } from "styles/buttonStyles";
import PlayGameQuestionValues from "./play-game-block/PlayGameQuestionValues";
import QuestionBlock from "./play-game-block/QuestionBlock";
import PlayGameModal from "./PlayGameModal";
import Points from "./Points";
import useGamePlay from "./useGamePlay";

export interface IPlayGame {}
export default function PlayGame({}: IPlayGame) {
  const {
    gamePlay,
    colorMode,
    gameProps,
    dispatch,
    modalProps,
    setQuestion,
    onClose,
  } = useGamePlay();
  const Button = SetButtonStyles(gameProps.currentTeam.teamColor);
  const theme = extendTheme(
    withDefaultColorScheme({ colorScheme: "telegram" }),
    {
      components: {
        Button,
      },
    }
  );

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "changeTeam", data: {} });
        }}
      >
        swrbv
      </button>
      <ChakraProvider theme={theme}>
        <PlayGameContext.Provider
          value={{
            currentTeam: gameProps.currentTeam,
          }}
        >
          <Stack w={"100%"}>
            <Stack
              width={"100%"}
              bg={colorMode === "dark" ? "gray.700" : "whiteAlpha.100"}
              p="5"
              rounded={"md"}
              boxShadow={"md"}
            >
              <Stack mb={50}>
                <Center>
                  <Heading color={gameProps.currentTeam.teamColor}>
                    {gamePlay.title}
                  </Heading>
                </Center>
                {gamePlay?.teams.length !== 0 && (
                  <Flex>
                    <Points
                      teamA={gamePlay.teams[0]}
                      teamB={gamePlay.teams[1]}
                    />
                  </Flex>
                )}
              </Stack>

              <Grid templateColumns={"1fr repeat(5,4fr)"} gap={2}>
                <GridItem w="100%">
                  <PlayGameQuestionValues values={gamePlay.questionValues} />
                </GridItem>
                {gamePlay.categories.map((category) => {
                  return (
                    <Fragment key={category.id}>
                      <GridItem>
                        <QuestionBlock
                          category={category}
                          questions={gamePlay.questions.filter(
                            (x) => x.categoryId === category.id
                          )}
                          setQuestion={setQuestion}
                        />
                      </GridItem>
                    </Fragment>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>

          <PlayGameModal modalProps={modalProps} onClose={onClose} />
        </PlayGameContext.Provider>
      </ChakraProvider>
    </>
  );
}
