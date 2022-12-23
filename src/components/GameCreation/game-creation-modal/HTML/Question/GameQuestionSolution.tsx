import { TextareaProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextArea from "shared/components/input/text-area/TextArea";

export interface IGameQuestionSolution {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: TextareaProps;
}
export default function GameQuestionSolution({
  formHook,
  additionalInputProps,
}: IGameQuestionSolution) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.solution?.message as string | undefined}
        label="Solution"
        placeHolder="Please provide Solution"
        input={
          <>
            {/* <CustomTextArea formHook = {formHook} name="problem"/> */}
            <TextArea
              props={{
                id: "solution",
                ...register("solution", {
                  required: "Please provide the solution",                  
                }),
                ...additionalInputProps,
              }}
            />
          </>
        }
      />
    </>
  );
}
