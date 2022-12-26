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
import { Fragment, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigation, useParams } from "react-router";
import GameBlock from "./game-block/GameBlock";
import GameCreationModal from "./game-creation-modal/GameCreationModal";
import GameValues from "./game-value/GameValues";
import useGameCreation from "./useGameCreation";

export interface IGameDesign {}
export default function GameDesign({}: IGameDesign) {
  const width = [1, 2, 3, 4, 5];
  const length = [1, 2, 3, 4, 5];
  const values = [100, 300, 500, 800, 1000];

  const {
    colorMode,
    questionValues,
    loading,
    game,
    categories,
    questions,
    modalProps,
    onClose,
    onQuestionOpen,
    onCategoryOpen,
    formHook,
    onError,
    onSubmit,
    onCancel,
    onQuestionValueOpen
  } = useGameCreation();

  if (loading) {
    return <>Loading</>;
  }
  return (
    <>
      <FormProvider {...formHook}>
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
              <GameValues values={questionValues} onOpen={onQuestionValueOpen} />
            </GridItem>
            {categories.map((category) => {
              return (
                <GridItem key={category.id} w="100%">
                  <GameBlock
                    category={category}
                    questions={questions}
                    {...{ onCategoryOpen, onQuestionOpen }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Stack>

        <GameCreationModal
          modalProps={modalProps}
          onClose={onClose}
          onError={onError}
          onSuccess={onSubmit}
          onCancel={onCancel}
        />
      </FormProvider>
    </>
  );
}
