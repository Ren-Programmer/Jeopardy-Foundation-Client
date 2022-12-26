import GameValue from "../game-value/GameValue";
import { IGameBox } from "../general/GameBox";
import { IGameQuestionDTO } from "../interfaces/game-creationd-tos";

export interface IGameQuestion {
  gameValueProps: IGameBox;
  onOpen: (data: IGameQuestionDTO) => void;
  question: IGameQuestionDTO;
  variant:string
}
export default function GameQuestion({
  gameValueProps,
  onOpen,
  question,
  variant
}: IGameQuestion) {
  gameValueProps.onClick = () => {
    onOpen(question);
  };
  return (
    <>
      <GameValue
        props={{
          ...gameValueProps,
          value: question.value,
          variant: variant,
        }}
      />
    </>
  );
}
