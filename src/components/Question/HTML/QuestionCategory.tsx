import { InputProps, SelectProps } from "@chakra-ui/react";
import agent from "api/agent";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import Select from "shared/components/select/Select";

export interface IQuestionCategory {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: SelectProps;
}
export default function QuestionCategory({
  formHook,
  additionalInputProps,
}: IQuestionCategory) {
  console.log("From Question Category");
  // const {
  //   register,
  //   formState: { errors },
  // } = formHook;
  const sleep = () =>
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
      console.log("From Sleeeo");
    });
  const params = new URLSearchParams();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <FormControl
        isRequired={true}
        errorMessage={
          formHook.formState.errors.categoryId?.message as string | undefined
        }
        label="Category"
        placeHolder="Please provide the Category of question"
        input={
          <>
            <Select
              additionalInputProps={additionalInputProps}
              fetchDataCall={() => agent.Category.Select!(params)}
              formHook={formHook}
              name="categoryId"
            />
          </>
        }
      />
    </>
  );
}
