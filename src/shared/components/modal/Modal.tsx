import Button from "../button/regular-button/Button";
import ModalBody, { IModalBody } from "./ModalBody";
import ModalFooter, { IModalFooter } from "./ModalFooter";
import ModalHeader, { IModalHeader } from "./ModalHeader";
import {
  Modal as CModal,
  ModalOverlay,
  ModalContent,
  ModalHeader as CModalHeader,
  ModalFooter as CModalFooter,
  ModalBody as CModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

export interface IModal {
  status: boolean;
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
  return (
    <>      
      <CModal closeOnOverlayClick={false} isOpen={status} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <CModalHeader>
            <ModalHeader {...modalHeaderProps} />
          </CModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <Divider></Divider>
          <CModalBody>
            <ModalBody {...modalBodyProps} />
          </CModalBody>
          <Divider></Divider>
          <CModalFooter>
            <ModalFooter {...modalFooterProps} />
          </CModalFooter>
        </ModalContent>
      </CModal>
    </>
  );
}
