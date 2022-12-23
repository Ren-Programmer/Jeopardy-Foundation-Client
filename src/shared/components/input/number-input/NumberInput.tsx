import {
  InputProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as CNumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  useNumberInput,
} from "@chakra-ui/react";
import { Controller, UseFormRegister, UseFormReturn } from "react-hook-form";

export interface INumberInput {
  props: NumberInputProps;
  formHook: UseFormReturn;
  name: string;
}
export default function NumberInput({ props, formHook, name }: INumberInput) {
  return (
    <>     
      <CNumberInput {...props}>
        <NumberInputField {...formHook.register(name)}></NumberInputField>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </CNumberInput>
    </>
  );
}
