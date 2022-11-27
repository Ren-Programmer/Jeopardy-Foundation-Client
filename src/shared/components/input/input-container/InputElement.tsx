import { HTMLInputTypeAttribute } from "react";

export interface IInputElement{
    inputType?: HTMLInputTypeAttribute;
    inputProps:React.InputHTMLAttributes<HTMLInputElement>
}


export default function InputElement({inputProps,inputType}:IInputElement) {
  return (
    <>
      <input type={inputType}  {...inputProps}/>
    </>
  );
}
