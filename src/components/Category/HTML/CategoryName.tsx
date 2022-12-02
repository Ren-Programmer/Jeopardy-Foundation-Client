//import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { Input, InputProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput, { ITextInput } from "shared/components/input/TextInput";

export interface ICreateCategoryName {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: InputProps
}

export default function CategoryName({
  formHook,
  additionalInputProps,
}: ICreateCategoryName) {
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
        label="Category Name"
        placeHolder="Please provide name of category"
        input={
          <>
            <TextInput
              props={{
                id: "name",
                ...register("name", {
                  required: "Category Name is required",
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
