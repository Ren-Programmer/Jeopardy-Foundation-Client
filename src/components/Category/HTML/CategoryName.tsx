import { UseFormReturn } from "react-hook-form";
import TextInput, { ITextInput } from "shared/components/input/TextInput";

export interface ICreateCategoryName {
  formHook: UseFormReturn<any,any>;
  additionalInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function CategoryName({ formHook,additionalInputProps }: ICreateCategoryName) {
  const {
    register,
    formState: { errors },
  } = formHook;
  console.log(additionalInputProps)
  return (
    <>
      <TextInput
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
      />
    </>
  );
}
