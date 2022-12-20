import { Button as CButton, ButtonProps } from "@chakra-ui/react";

//import "./Button.css";

export interface IButton {
  info: string;
  // buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonProps:ButtonProps
}

export default function Button({ info, buttonProps }: IButton) {
  
  return (
    <>
      <CButton {...buttonProps} colorScheme={process.env.REACT_APP_COLOR_SCHEME}>{info}</CButton>
      {/* <button
      {...buttonProps}
      >{info}</button> */}
    </>
  );
}
