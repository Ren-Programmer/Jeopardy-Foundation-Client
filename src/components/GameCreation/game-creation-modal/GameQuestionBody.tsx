import { HStack, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import CustomTextArea from "shared/components/input/text-area/CustomTextArea";
import { IGameQuestionDTO } from "../interfaces/game-creationd-tos";
import GameQuestionCategory from "./HTML/Question/GameQuestionCategory";
import GameQuestionMultiplier from "./HTML/Question/GameQuestionMultiplier";
import GameQuestionProblem from "./HTML/Question/GameQuestionProblem";
import GameQuestionSolution from "./HTML/Question/GameQuestionSolution";
import GameQuestionValue from "./HTML/Question/GameQuestionValue";

export interface IGameQuestionBody {
  data?: IGameQuestionDTO;
}
export default function GameQuestionBody({ data }: IGameQuestionBody) {
  const formHook = useFormContext();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Stack>
        <HStack>
          <GameQuestionCategory formHook={formHook} value={data?.category} />
          <GameQuestionValue
            formHook={formHook}
            value={data?.value.toString()}
          />
          <GameQuestionMultiplier
            formHook={formHook}
            value={data?.multiplier.toString()}
          />
        </HStack>
        <GameQuestionProblem formHook={formHook} />
        <GameQuestionSolution formHook={formHook} />
      </Stack>
    </>
  );
}
