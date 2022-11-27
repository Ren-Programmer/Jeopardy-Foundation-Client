import { UseFormReturn } from "react-hook-form";
import TextArea from "shared/components/input/text-area/TextArea";

export interface ICategoryDescription {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function CategoryDescription({
  formHook,
  additionalInputProps,
}: ICategoryDescription) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <TextArea
        elementInputProps={{
          labelString: "Description",
          propertyName: "description",
          inputProps: {
            placeholder: "Provide Description Here",
            ...register("description", {
              minLength: {
                value: 10,
                message: "Description needs to be atleast 10 characters long",
              },
            }),
            ...additionalInputProps,
          },
          error: errors.description?.message as string | undefined,
        }}
      />
    </>
  );
}
