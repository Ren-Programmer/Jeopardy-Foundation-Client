import { Stack } from "@chakra-ui/react";
import GameValue from "../game-value/GameValue";
import {
  IGameCategoryDTO,
  IGameQuestionDTO,
} from "../interfaces/game-creationd-tos";
import GameCategory from "./GameCategory";
import GameQuestion from "./GameQuestion";

export interface IGameBlock {
  category: IGameCategoryDTO;
  questions: IGameQuestionDTO[];
  onQuestionOpen: (data: IGameQuestionDTO) => void;
  onCategoryOpen: (data: IGameCategoryDTO) => void;
}
export default function GameBlock({
  category,
  questions,
  onCategoryOpen,
  onQuestionOpen,
}: IGameBlock) {
  const actualQuestions = questions
    .filter((x) => x.categoryId === category.id)
    .sort((a, b) => a.value - b.value);
  return (
    <>
      <Stack>
        <GameCategory
          gameValueProps={{}}
          onOpen={onCategoryOpen}
          category={category}
        />

        {actualQuestions.map((value, index) => {
          if (value.solution && value.problem) {
            return (
              <GameQuestion
                variant="gameQuestionCompleteCell"
                key={index}
                gameValueProps={{}}
                onOpen={onQuestionOpen}
                question={value}
              />
            );
          } else {
            return (
              <GameQuestion
                variant="gameCell"
                key={index}
                gameValueProps={{}}
                onOpen={onQuestionOpen}
                question={value}
              />
            );
          }
        })}
      </Stack>
    </>
  );
}
