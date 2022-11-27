import React, { ReactElement } from "react";


export interface IModalFooter {
  content: ReactElement |null;
}

export default function ModalFooter({ content }: IModalFooter) {
  return <>{content}</>;
}
