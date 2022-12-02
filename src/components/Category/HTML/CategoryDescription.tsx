import { TextareaProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextArea from "shared/components/input/text-area/TextArea";

export interface ICategoryDescription {
  formHook: UseFormReturn<any, any>;
  additionalInputProps?: TextareaProps
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
      <FormControl
        errorMessage={errors.description?.message as string | undefined}
        label="Category Description"
        placeHolder="Please provide description of category"
        input={
          <>
            <TextArea
              props={{
                id: "description",
                ...register("description", {
                  minLength: {
                    value: 10,
                    message: "Description needs to be at least 10 characters long",
                  },
                }),
                ...additionalInputProps
              }}
            />
          </>
        }
      />
    </>
  );
}
