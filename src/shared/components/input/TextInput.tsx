import { Input, InputProps } from "@chakra-ui/react";
import { IInput } from "./Input";

export interface ITextInput {
  props: InputProps;
}

export default function TextInput({props}: ITextInput) {
  return (
    <>
      <Input type={"text"} {...props}/>
    </>
  );
}
