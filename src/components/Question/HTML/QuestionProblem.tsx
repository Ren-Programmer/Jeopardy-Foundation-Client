import { TextareaProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextArea from "shared/components/input/text-area/TextArea";

export interface IQuestionProblem {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: TextareaProps;
}
export default function QuestionProblem({
  formHook,
  additionalInputProps,
}: IQuestionProblem) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>      
      <FormControl
        isRequired={true}
        errorMessage={errors.problem?.message as string | undefined}
        label="Problem"
        placeHolder="Please provide the problem of question"
        input={
          <>
            <TextArea
              props={{
                id: "problem",
                ...register("problem", {
                  required: "Problem is required",
                  minLength: {
                    value: 10,
                    message: "Problem needs to be at least 10 characters long",
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
