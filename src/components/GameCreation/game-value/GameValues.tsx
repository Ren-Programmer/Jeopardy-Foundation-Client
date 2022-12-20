import { Stack, VisuallyHidden } from "@chakra-ui/react";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import GameValue from "./GameValue";

export interface IGameValues {
  values: IQuestionValue[];
}
export default function GameValues({ values }: IGameValues) {
  return (
    <>
      <Stack>
        
          <GameValue value={""} bgProps={{
            bg:"transparent"
          }} />
        
        {values
          .sort((a, b) => a.value - b.value)
          .map((value, index) => {
            return <GameValue key={index} value={value.value.toString()} />;
          })}
      </Stack>
    </>
  );
}
