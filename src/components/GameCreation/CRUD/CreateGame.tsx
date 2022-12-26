import { useFormContext } from "react-hook-form";
import GameName from "./HTML/GameName";

export interface ICreateGame {}
export default function CreateGame({}: ICreateGame) {
  const formHook = useFormContext();
  return (
    <>
      <GameName formHook={formHook} />
    </>
  );
}
