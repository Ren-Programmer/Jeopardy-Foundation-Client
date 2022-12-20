import { Stack } from "@chakra-ui/react";
import GameValue from "../game-value/GameValue";
import { IGameCategory, IGameQuestion } from "../interfaces/game-creationd-tos";

export interface IGameBlock {
  category: IGameCategory;
  questions: IGameQuestion[];
}
export default function GameBlock({ category, questions }: IGameBlock) {
  const actualQuestions = questions
    .filter((x) => x.categoryId === category.id)
    .sort((a, b) => a.value - b.value);
  return (
    <>
      <Stack>
        <GameValue value={category.name} bgProps={{}} />

        {actualQuestions.map((value, index) => {
          return <GameValue key={index} value={value.problem} />;
        })}
      </Stack>
    </>
  );
}
