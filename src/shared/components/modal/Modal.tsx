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
  useColorMode,
} from "@chakra-ui/react";

export interface IModal {
  status: boolean;
  onClose: () => void;
  modalHeaderProps: IModalHeader;
  modalBodyProps: IModalBody;
  modalFooterProps: IModalFooter;
  size?:"md" | "sm" | "lg" | "xl" | "2xl" | (string & {}) | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "full"
}

export default function Modal({
  status,
  onClose,
  modalHeaderProps,
  modalBodyProps,
  modalFooterProps,
  size="xl"
}: IModal) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <CModal closeOnOverlayClick={false} isOpen={status} onClose={onClose} size={size}
      scrollBehavior="inside"
      >
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <button
            onClick={() => {
              toggleColorMode();
            }}
          >
            dfazdv ad
          </button>
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
