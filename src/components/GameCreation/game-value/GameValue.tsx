import { BoxProps } from "@chakra-ui/react";
import GameBox from "../general/GameBox";

export interface IGameValue {
  value: string;
  bgProps?:BoxProps
}
export default function GameValue({ value,bgProps = {} }: IGameValue) {
  return (
    <>
      <GameBox value={value} boxProps={bgProps} />
    </>
  );
}
