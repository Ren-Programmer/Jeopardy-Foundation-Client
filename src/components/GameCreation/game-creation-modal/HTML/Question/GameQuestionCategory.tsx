import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput from "shared/components/input/TextInput";

export interface IGameQuestionCategory {
  formHook: UseFormReturn<any, any>;
  value?: string;
}
export default function GameQuestionCategory({
  formHook,
  value,
}: IGameQuestionCategory) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.name?.message as string | undefined}
        label="Category"
        placeHolder="Question Category"
        input={
          <>
            <TextInput
              props={{
                id: "category",
                ...register("category"),
                isReadOnly: true,
                
              }}
            />
          </>
        }
      />
    </>
  );
}
