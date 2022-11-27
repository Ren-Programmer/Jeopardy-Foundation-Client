import Input, { IInput } from "./Input";

export interface ITextInput {
  elementInputProps: IInput;
}

export default function TextInput({ elementInputProps }: ITextInput) {
  elementInputProps.inputType = "text";
  return (
    <>
      <Input {...elementInputProps} />
    </>
  );
}
