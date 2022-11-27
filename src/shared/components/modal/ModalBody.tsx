import { ReactElement } from "react";

export interface IModalBody {
  body: ReactElement | null;
}

export default function ModalBody({ body }: IModalBody) {
  return <>{body}</>;
}
