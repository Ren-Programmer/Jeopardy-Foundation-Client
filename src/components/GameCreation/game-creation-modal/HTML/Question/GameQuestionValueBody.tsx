import { Stack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import GameQuestionValueValue from "../QuestionValue/GameQuestionValueValue";

export interface IGameQuestionValueBody {}
export default function GameQuestionValueBody({}: IGameQuestionValueBody) {
  const formHook = useFormContext();
  return (
    <>
      <Stack>
        <GameQuestionValueValue formHook={formHook} />
      </Stack>
    </>
  );
}
