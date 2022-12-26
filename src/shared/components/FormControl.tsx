import {
  FormControl as CFormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";

export interface IFormControl {
  label: string|ReactElement;
  input: ReactElement;
  errorMessage?: string;
  placeHolder: string;
  isRequired?:boolean
}

export default function FormControl({
  errorMessage,
  input,
  label,
  placeHolder,
  isRequired = false
}: IFormControl) {
 
  const isError = errorMessage !== undefined && errorMessage !== ""
  return (
    <>
      <CFormControl 
      my={5}
      isRequired={isRequired}
      isInvalid={isError}>
        <FormLabel>{label}</FormLabel>
        {input}
        {!isError ? (
          <FormHelperText>{placeHolder}</FormHelperText>
        ) : (
          <>
            <FormErrorMessage>
              <FormErrorIcon></FormErrorIcon>
              {errorMessage}
            </FormErrorMessage>
          </>
        )}
      </CFormControl>
    </>
  );
}
