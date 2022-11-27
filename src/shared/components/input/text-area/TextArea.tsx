import Label from "shared/components/label/Label";
import Input, { IInput } from "../Input";

export interface ITextArea {
  elementInputProps: IInput;
}

export default function TextArea({ elementInputProps }: ITextArea) {
  return (
    <>
      <Input {...elementInputProps} isTextArea={true} />
    </>
  );
}
