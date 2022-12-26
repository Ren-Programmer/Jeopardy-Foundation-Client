import { InputProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput from "shared/components/input/TextInput";

export interface IGameName {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: InputProps;
}
export default function GameName({
  formHook,
  additionalInputProps,
}: IGameName) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      {" "}
      <FormControl
        errorMessage={errors.title?.message as string | undefined}
        label="Game Title"
        placeHolder="Please provide title of Game"
        input={
          <>
            <TextInput
              props={{
                id: "title",
                ...register("title", {
                  required: "Game Title is required",
                }),
                ...additionalInputProps,
              }}
            />
          </>
        }
        isRequired={true}
      />
    </>
  );
}
