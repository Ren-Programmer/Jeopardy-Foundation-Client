import { createContext, useMemo } from "react";
export interface IGameCreationContext {
  channel: BroadcastChannel;
}

const GameCreationContext = createContext<IGameCreationContext>({
  channel: new BroadcastChannel("questions"),
});
export default GameCreationContext;
