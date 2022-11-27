import "./Input.css";

import { HTMLInputTypeAttribute } from "react";
import Label from "../label/Label";
import InputContainer from "./input-container/InputContainer";
import InputElement from "./input-container/InputElement";

export interface IInput {
  labelString: string;
  propertyName: string;
  inputType?: HTMLInputTypeAttribute;
  inputProps?:
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
  isTextArea?: boolean;
}

export default function Input({
  labelString,
  propertyName,
  inputType,
  inputProps = {},
  error = undefined,
  isTextArea = false,
}: IInput) {
  return (
    <>
      <InputContainer
        error={error}
        label={
          <>
            <Label propertyName={propertyName} labelName={labelString} />
          </>
        }
        element={
          <>
            <div className="input-div">
              {isTextArea === false && (
                <>
                  <input type={inputType} {...inputProps as React.InputHTMLAttributes<HTMLInputElement>} />                 
                </>
              )}
              {isTextArea === true && (
                <>
                  <textarea {...inputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
                </>
              )}
            </div>
          </>
        }
      />
    </>
  );
}

// <div className="input-container">
// <Label propertyName={propertyName} labelName={labelString} />
// {/* <div className="input-label">
// </div> */}
// <div className="input-div">
// <div className="input-input">
//   <input type={inputType} {...inputProps} />
// </div>
// {error !== undefined && <div className="input-error">{error}</div>}
// </div>
// </div>
