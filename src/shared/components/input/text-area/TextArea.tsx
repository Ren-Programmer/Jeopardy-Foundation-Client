import Label from "shared/components/label/Label";
import {Textarea as CTextArea,TextareaProps} from "@chakra-ui/react"


export interface ITextArea {
  props: TextareaProps;
}

export default function TextArea({ props }: ITextArea) {
  return (
    <>
      <CTextArea {...props}/>
    </>
  );
}
