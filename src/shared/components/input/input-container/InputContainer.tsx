import { ReactElement } from "react";
import "./InputContainer.css";

export interface IInputContainer {
  label?: ReactElement;
  element?: ReactElement;
  error?: string;
}

export default function InputContainer({
  label,
  element,
  error,
}: IInputContainer) {
  return (
    <>
      <div className="input-container">
        <div className="label-div">{label}</div>
        <div className="input-div">
          {element}
          {error !== undefined && <div className="input-error">{error}</div>}
        </div>
      </div>
    </>
  );
}
