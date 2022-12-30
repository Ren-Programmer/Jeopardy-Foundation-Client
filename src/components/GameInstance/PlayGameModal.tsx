import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  Center,
  Text,
  HStack,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Slide } from "react-toastify";
import Button from "shared/components/button/regular-button/Button";
import CrudActions from "shared/components/modal/crud-modal/CrudActions";
import PlayModalBodyContent from "./PlayModalBodyContent";
import { QuestionModalProps } from "./useGamePlay";

export interface IPlayGameModal {
  onClose: () => void;
  modalProps: QuestionModalProps;
}
export default function PlayGameModal({ modalProps, onClose }: IPlayGameModal) {
  const {
    currentTeam: { teamColor },
  } = useContext(PlayGameContext);

  //   const questionDisclosure = useDisclosure({ isOpen: true });
  //   const answerDisclosure = useDisclosure({ isOpen: true });
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={modalProps.show}
        onClose={onClose}
        size={"2xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(20px) hue-rotate(90deg)"
        />
        <PlayModalBodyContent onClose={onClose} modalProps={modalProps} />
      </Modal>
    </>
  );
}
