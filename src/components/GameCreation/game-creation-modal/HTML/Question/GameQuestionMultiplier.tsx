import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import NumberInput from "shared/components/input/number-input/NumberInput";
import TextInput from "shared/components/input/TextInput";

export interface IGameQuestionMultiplier {
  formHook: UseFormReturn<any, any>;
  value?: string;
}
export default function GameQuestionMultiplier({
  formHook,
  value,
}: IGameQuestionMultiplier) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.name?.message as string | undefined}
        label="Multiplier"
        placeHolder="Question Multiplier"
        input={
          <>
            {/* <TextInput
              props={{
                id: "multiplier",
                ...register("multiplier"),
                defaultValue: value,
              }}
            /> */}
            <NumberInput
            name="multiplier"
              formHook={formHook}
              props={{
                id: "multiplier",
                min: 1,
                max: 3,
                
              }}
            />
          </>
        }
      />
    </>
  );
}
