import Button from "../button/regular-button/Button";
import "./css/Modal.css";
import ModalBody, { IModalBody } from "./ModalBody";
import ModalFooter, { IModalFooter } from "./ModalFooter";
import ModalHeader, { IModalHeader } from "./ModalHeader";

export interface IModal {
  status: "open" | "close";
  onClose: () => void;
  modalHeaderProps: IModalHeader;
  modalBodyProps: IModalBody;
  modalFooterProps: IModalFooter;
}

export default function Modal({
  status,
  onClose,
  modalHeaderProps,
  modalBodyProps,
  modalFooterProps,
}: IModal) {
  if (status === "close") return null;
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <ModalHeader {...modalHeaderProps} />
            </div>
            <div className="close-modal">
              <button
              onClick={onClose}
              >X
              </button>
            </div>
          </div>
          <div className="modal-body">
            <ModalBody {...modalBodyProps} />
          </div>
          <div className="modal-footer">
            <ModalFooter {...modalFooterProps} />
          </div>
        </div>
      </div>
    </>
  );
}
