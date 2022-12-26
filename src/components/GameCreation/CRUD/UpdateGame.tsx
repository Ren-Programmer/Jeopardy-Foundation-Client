import { useFormContext } from "react-hook-form";
import GameName from "./HTML/GameName";

export interface IUpdateGame {}
export default function UpdateGame({}: IUpdateGame) {
  const formHook = useFormContext();
  return (
    <>
      <GameName formHook={formHook} />
    </>
  );
}
