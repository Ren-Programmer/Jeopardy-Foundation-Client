import { ReactElement } from "react";
import Modal, { IModal } from "../Modal";

export interface ICrudModal {
  modalProps: IModal;
  body:ReactElement | null
  processButtonProps?:any
}

export default function CrudModal({ modalProps,body }: ICrudModal) {
    modalProps.modalBodyProps.body = body
  return (
    <>
      <Modal {...modalProps} />
    </>
  );
}
