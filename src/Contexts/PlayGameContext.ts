import { GamePlayProps } from "components/GameInstance/useGamePlay";
import { createContext } from "react";

export interface IPlayGameContext extends GamePlayProps {}

const PlayGameContext = createContext<IPlayGameContext>({
  currentTeam: { id: "", name: "", score: 0, teamColor: "" },
});

export default PlayGameContext;
