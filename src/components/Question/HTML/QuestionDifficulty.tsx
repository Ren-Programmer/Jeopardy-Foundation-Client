import { SelectProps } from "@chakra-ui/react";
import agent from "api/agent";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import Select from "shared/components/select/Select";

export interface IQuestionDifficulty {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: SelectProps;
}
export default function QuestionDifficulty({
  formHook,
  additionalInputProps,
}: IQuestionDifficulty) {
  return (
    <>
      <FormControl
        isRequired={true}
        errorMessage={
          formHook.formState.errors.difficulty?.message as string | undefined
        }
        label="Question Difficulty"
        placeHolder="Please provide the Difficulty of question"
        input={
          <>
            <Select
              additionalInputProps={additionalInputProps}
              fetchDataCall={() => agent.Helper.QuestionDifficulty()}
              formHook={formHook}
              name="difficulty"
              isEnum={true}
            />
          </>
        }
      />
    </>
  );
}
