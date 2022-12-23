import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput from "shared/components/input/TextInput";

export interface IGameCategoryName {
  formHook: UseFormReturn<any, any>;
}
export default function GameCategoryName({ formHook }: IGameCategoryName) {
  const {
    register,
    formState: { errors },
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.name?.message as string | undefined}
        label="Name"
        placeHolder="Please provide Name of Category"
        input={
          <>
            {/* <button onClick={onOpen}>Repo</button> */}
            {/* <CustomTextArea formHook = {formHook} name="problem"/> */}
            <TextInput
              props={{
                id: "name",
                ...register("name", {
                  required: "Category Name is required",
                }),
              }}
            />
          </>
        }
      />
    </>
  );
}
