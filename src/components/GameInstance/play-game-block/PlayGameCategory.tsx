import GameBox, { IGameBox } from "components/GameCreation/general/GameBox";
import { IGameCategoryDTO } from "components/GameCreation/interfaces/game-creationd-tos";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext } from "react";

export interface IPlayGameCategory {
  gameValueProps: IGameBox;
  category: IGameCategoryDTO;
}
export default function PlayGameCategory({
  category,
  gameValueProps,
}: IPlayGameCategory) {
  const { currentTeam:{teamColor} } = useContext(PlayGameContext);
  return (
    <>
      <GameBox
        {...{
          ...gameValueProps,
          value: category.name,
          colorScheme: teamColor,          
        }}
      />
    </>
  );
}
