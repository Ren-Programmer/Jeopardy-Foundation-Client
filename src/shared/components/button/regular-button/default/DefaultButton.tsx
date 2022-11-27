import Button, { IButton } from "../Button";
import "./DefaultButton.css";

export interface IDefaultButton extends IButton {}

export default function DefaultButton({ buttonProps, info }: IDefaultButton) {
  return (
    <>
      <div className="default-button">
        <Button buttonProps={buttonProps} info={info} />
      </div>
    </>
  );
}
