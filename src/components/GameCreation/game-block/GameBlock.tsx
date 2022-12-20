import { Stack } from "@chakra-ui/react";
import GameValue from "../game-value/GameValue";

export interface IGameBlock {
  categoryName: string;
}
export default function GameBlock({ categoryName }: IGameBlock) {
  const y = [1, 2, 3, 4, 5];
  return (
    <>
      <Stack>
        <GameValue value={categoryName} bgProps={{}} />

        {y.map((value, index) => {
          return <GameValue key={index} value={value.toString()} />;
        })}
      </Stack>
    </>
  );
}
