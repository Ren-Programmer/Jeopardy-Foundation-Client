import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput from "shared/components/input/TextInput";

export interface IGameQuestionValue {
  formHook: UseFormReturn<any, any>;
  value?: string;
}
export default function GameQuestionValue({
  formHook,
  value,
}: IGameQuestionValue) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.name?.message as string | undefined}
        label="Value"
        placeHolder="Question Value"
        input={
          <>
            <TextInput
              props={{
                id: "value",
                ...register("value"),
                isReadOnly: true,
                
              }}
            />
          </>
        }
      />
    </>
  );
}
