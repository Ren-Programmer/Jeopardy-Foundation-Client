import { ReactElement } from "react";

export interface ICardBody {
  children: ReactElement;
}

export default function CardBody({ children }: ICardBody) {
  return (
    <>
      <div className="class-body">{children}</div>
    </>
  );
}
