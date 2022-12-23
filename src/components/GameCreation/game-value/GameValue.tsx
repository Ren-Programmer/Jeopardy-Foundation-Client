import { BoxProps } from "@chakra-ui/react";
import GameBox, { IGameBox } from "../general/GameBox";

export interface IGameValue {
  props:IGameBox
}
export default function GameValue({props}: IGameValue) {
  return (
    <>
      <GameBox  {...props}/>
    </>
  );
}
