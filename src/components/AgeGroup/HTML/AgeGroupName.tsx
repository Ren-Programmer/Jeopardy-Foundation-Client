//import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { Input, InputProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput, { ITextInput } from "shared/components/input/TextInput";

export interface ICreateAgeGroupName {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: InputProps
}

export default function AgeGroupName({
  formHook,
  additionalInputProps,
}: ICreateAgeGroupName) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      {/* <TextInput
        elementInputProps={{
          labelString: "Name",
          propertyName: "name",
          inputProps: {
            placeholder: "Provide Name Here",
            ...register("name", {
              required: "Name is required",
            }),
            ...additionalInputProps
          },
          error: errors.name?.message as string | undefined,
        }}
      /> */}

      <FormControl 
        errorMessage={errors.name?.message as string | undefined}
        label="Age Group Name"
        placeHolder="Please provide name of Age Group"
        input={
          <>
            <TextInput
              props={{
                id: "name",
                ...register("name", {
                  required: "Age Group Name is required",
                }),
                ...additionalInputProps
              }}
            />
          </>
        }
        isRequired={true}
      />
    </>
  );
}
