import { Stack } from "@chakra-ui/react";
import GameCategory, {
  IGameCategory,
} from "components/GameCreation/game-block/GameCategory";
import { IGameCategoryDTO } from "components/GameCreation/interfaces/game-creationd-tos";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import { Fragment } from "react";
import { IGamePlayQuestionDTO } from "../interfaces/game-instance-dtos";
import PlayGameCategory from "./PlayGameCategory";
import PlayGameQuestion from "./PlayGameQuestion";

export interface IQuestionBlock {
  category: IGameCategoryDTO;
  questions: IGamePlayQuestionDTO[];
  setQuestion:(question:IGamePlayQuestionDTO)=>void
}
export default function QuestionBlock({ category, questions,setQuestion }: IQuestionBlock) {
  return (
    <>
      <Stack>
        <PlayGameCategory gameValueProps={{}} category={category} />
        {questions
          .sort((a, b) => a.value - b.value)
          .map((question) => {
            if (question.answerStatus === "NotAnswered") {
              return (
                <Fragment key={question.id}>
                  <PlayGameQuestion
                    gameValueProps={{}}
                    onOpen={() => {}}
                    question={question}
                    variant={"gameCell"}
                    setQuestion={setQuestion}
                  />
                </Fragment>
              );
            } else {
              return (
                <Fragment key={question.id}>
                  <PlayGameQuestion
                    gameValueProps={{}}
                    onOpen={() => {}}
                    question={question}
                    variant={"gameQuestionCompleteCell"}
                    setQuestion={(q)=>{}}
                  />
                </Fragment>
              );
            }
          })}
      </Stack>
    </>
  );
}
