import { InputProps, SelectProps } from "@chakra-ui/react";
import agent from "api/agent";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import Select from "shared/components/select/Select";

export interface IAgeGroup {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: SelectProps;
}
export default function AgeGroup({
  formHook,
  additionalInputProps,
}: IAgeGroup) {
  const params = new URLSearchParams();
  return (
    <>
      <FormControl
        isRequired={true}
        errorMessage={
          formHook.formState.errors.ageGroupId?.message as string | undefined
        }
        label="Age Group"
        placeHolder="Please provide the Age Group of question"
        input={
          <>
            <Select
              additionalInputProps={additionalInputProps}
              fetchDataCall={() => agent.AgeGroup.Select!(params)}
              formHook={formHook}
              name="ageGroupId"
            />
          </>
        }
      />
    </>
  );
}
