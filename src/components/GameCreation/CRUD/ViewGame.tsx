import { useFormContext } from "react-hook-form";
import GameName from "./HTML/GameName";

export interface IViewGame {}
export default function ViewGame({}: IViewGame) {
  const formHook = useFormContext();
  return (
    <>
      <GameName
        formHook={formHook}
        additionalInputProps={{
          isReadOnly: true,
        }}
      />
    </>
  );
}
