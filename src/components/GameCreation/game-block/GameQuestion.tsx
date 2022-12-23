import GameValue from "../game-value/GameValue";
import { IGameBox } from "../general/GameBox";
import { IGameQuestionDTO } from "../interfaces/game-creationd-tos";

export interface IGameQuestion {
  gameValueProps: IGameBox;
  onOpen: (data: IGameQuestionDTO) => void;
  question: IGameQuestionDTO;
}
export default function GameQuestion({
  gameValueProps,
  onOpen,
  question,
}: IGameQuestion) {
  gameValueProps.onClick = () => {
    onOpen(question);
  };
  return (
    <>
      <GameValue props={gameValueProps} />
    </>
  );
}
