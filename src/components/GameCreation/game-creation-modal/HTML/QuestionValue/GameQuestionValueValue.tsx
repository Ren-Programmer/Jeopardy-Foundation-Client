import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import NumberInput from "shared/components/input/number-input/NumberInput";

export interface IGameQuestionValueValue {
  formHook: UseFormReturn<any, any>;
}
export default function GameQuestionValueValue({
  formHook,
}: IGameQuestionValueValue) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.value?.message as string | undefined}
        label="Value"
        placeHolder="Please provide Question Value"
        input={
          <>
            {/* <button onClick={onOpen}>Repo</button> */}
            {/* <CustomTextArea formHook = {formHook} name="problem"/> */}
            <NumberInput
              name="value"
              formHook={formHook}
              props={{
                id: "value",
                min: 1,
              }}
            />
          </>
        }
      />
    </>
  );
}
