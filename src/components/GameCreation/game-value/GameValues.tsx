import { Stack, VisuallyHidden } from "@chakra-ui/react";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import GameQuestionValue from "../game-block/GameQuestionValue";
import { IGameBox } from "../general/GameBox";
import GameValue from "./GameValue";

export interface IGameValues {
  values: IQuestionValue[];
  onOpen: (data: IQuestionValue) => void;
}
export default function GameValues({ values, onOpen }: IGameValues) {
  return (
    <>
      <Stack>
        <GameValue
          props={{
            value: "",
            colorScheme: "telegram",
          }}
        />

        {values
          .sort((a, b) => a.value - b.value)
          .map((value, index) => {
            return (
              // <GameValue
              //   key={index}
              //   props={{
              //     value: value.value,
              //     variant:"gameCategory"
              //   }}
              // />
              <GameQuestionValue
                key={index}
                gameValueProps={{}}
                onOpen={onOpen}
                questionValue={value}
              />
            );
          })}
      </Stack>
    </>
  );
}
