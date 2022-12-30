import GameValue from "components/GameCreation/game-value/GameValue";
import { IGameBox } from "components/GameCreation/general/GameBox";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import { IGamePlayQuestionDTO } from "../interfaces/game-instance-dtos";

export interface IPlayGameQuestion {
  gameValueProps: IGameBox;
  onOpen: (data: IGamePlayQuestionDTO) => void;
  question: IGamePlayQuestionDTO;
  variant: string;
  setQuestion: (question: IGamePlayQuestionDTO) => void;
}
export default function PlayGameQuestion({
  gameValueProps,
  onOpen,
  question,
  variant,
  setQuestion,
}: IPlayGameQuestion) {
  return (
    <>
      <GameValue
        props={{
          ...gameValueProps,
          value: question.value,
          variant: variant,
          onClick: () => setQuestion(question),
        }}
      />
    </>
  );
}
