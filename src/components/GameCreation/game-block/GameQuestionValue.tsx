import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import GameValue from "../game-value/GameValue";
import { IGameBox } from "../general/GameBox";

export interface IGameQuestionValue {
  gameValueProps: IGameBox;
  onOpen: (data: IQuestionValue) => void;
  questionValue: IQuestionValue;
}

export default function GameQuestionValue({
  gameValueProps,
  onOpen,
  questionValue,
}: IGameQuestionValue) {
  gameValueProps.onClick = () => {
    onOpen(questionValue);
  };
  return (
    <>
      <GameValue
        props={{
          ...gameValueProps,
          value: questionValue.value,
          variant: "gameCategory",
        }}
      />
    </>
  );
}
