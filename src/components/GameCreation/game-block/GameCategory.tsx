import GameValue from "../game-value/GameValue";
import { IGameBox } from "../general/GameBox";
import { IGameCategoryDTO } from "../interfaces/game-creationd-tos";

export interface IGameCategory {
    gameValueProps: IGameBox;
    onOpen: (data: IGameCategoryDTO) => void;
    category: IGameCategoryDTO;
}
export default function GameCategory({gameValueProps,onOpen,category}: IGameCategory) {
  gameValueProps.onClick = () => {
    onOpen(category);
  };
  return (
    <>
      <GameValue props={gameValueProps} />
    </>
  );
}
