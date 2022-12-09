import { TextareaProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextArea from "shared/components/input/text-area/TextArea";

export interface IQuestionSolution {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: TextareaProps;
}
export default function QuestionSolution({
  formHook,
  additionalInputProps,
}: IQuestionSolution) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        isRequired={true}
        errorMessage={errors.solution?.message as string | undefined}
        label="Solution"
        placeHolder="Please provide the solution of question"
        input={
          <>
            <TextArea
              props={{
                id: "solution",
                ...register("solution", {
                  required: "Solution is required",
                  minLength: {
                    value: 10,
                    message: "Solution needs to be at least 10 characters long",
                  },
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
