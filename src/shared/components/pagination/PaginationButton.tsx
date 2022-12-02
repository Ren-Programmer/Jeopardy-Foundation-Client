import Button, { IButton } from "../button/regular-button/Button";
import { PaginationProps } from "./Pagination";

export interface IPaginationButton extends IButton {}

export default function PaginationButton({
  info,
  buttonProps,
}: IPaginationButton) {
    buttonProps.mx = 1;
  return (
    <>
      <Button info={info} buttonProps={buttonProps} />
    </>
  );
}
