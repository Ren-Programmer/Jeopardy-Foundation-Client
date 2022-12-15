import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import FormControl from "shared/components/FormControl";

export interface IUserPassword {
  formHook: UseFormReturn<any, any>;
}
export default function UserPassword({ formHook }: IUserPassword) {
  const [show, setShow] = useState(false);
  const {
    formState: { errors },
    register,
  } = formHook;
  return (
    <>
      <FormControl
        errorMessage={errors.password?.message as string | undefined}
        isRequired
        label={"Password"}
        input={
          <>
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input
                type={show ? "text" : "password"}
                {...formHook.register("password", {
                  required: "Password is Required",
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </>
        }
        placeHolder={""}
      />
    </>
  );
}
