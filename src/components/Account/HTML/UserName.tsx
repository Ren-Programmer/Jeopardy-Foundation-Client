import { Input, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import TextInput from "shared/components/input/TextInput";
import { FaArchway } from "react-icons/fa";
export interface IUserName {
  formHook: UseFormReturn<any, any>;
}
export default function UserName({ formHook }: IUserName) {
  const {
    formState: { errors },
    register,
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.userName?.message as string | undefined}
        isRequired
        label={"User Name"}
        input={
          <>
            <InputGroup>
              <InputLeftElement children={<FaArchway />} />
              <Input
                {...formHook.register("userName", {
                  required: "UserName is Required",
                })}
              />
            </InputGroup>
          </>
        }
        placeHolder={""}
      />
    </>
  );
}
