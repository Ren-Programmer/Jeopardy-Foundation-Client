import { Stack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { IGameCategoryDTO } from "../interfaces/game-creationd-tos";
import GameCategoryDescription from "./HTML/Category/GameCategoryDescription";
import GameCategoryName from "./HTML/Category/GameCategoryName";

export interface IGameCategoryBody {}
export default function GameCategoryBody({}: IGameCategoryBody) {
  const formHook = useFormContext();
  return (
    <>
      <Stack>
        <GameCategoryName formHook={formHook} />
        <GameCategoryDescription formHook={formHook} />
      </Stack>
    </>
  );
}
