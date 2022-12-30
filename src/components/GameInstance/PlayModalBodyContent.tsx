import {
  ModalContent,
  Fade,
  ModalHeader,
  Center,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  HStack,
  Text,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { FaRegSmileBeam, FaRegFrown } from "react-icons/fa";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext, useEffect, useState, useRef } from "react";
import Button from "shared/components/button/regular-button/Button";
import { QuestionModalProps } from "./useGamePlay";
import IconButton from "shared/components/button/icon-button/IconButton";
import Timer from "shared/components/timer/Timer";

export interface IPlayModalBodyContent {
  onClose: () => void;
  modalProps: QuestionModalProps;
}
export default function PlayModalBodyContent({
  modalProps,
}: IPlayModalBodyContent) {
  const [questionState, setQuestionState] = useState<"question" | "answer">(
    "question"
  );
  const [isOpen, setIsOpen] = useState(true);
  const isLoading = useRef(true);
  const [changeQues, setChangeQues] = useState(Math.random());
  const {
    currentTeam: { teamColor },
  } = useContext(PlayGameContext);

  useEffect(() => {
    if (isLoading.current === true) {
      console.log("f");

      isLoading.current = false;
    } else {
      setIsOpen(false);
      setTimeout(() => setQuestionState("answer"), 1000);
      const idb = setTimeout(() => setIsOpen(true), 1000);
    }
  }, [changeQues]);

  const questionOptions = (
    <>
      <HStack>
        <Button
          info="Show Answer"
          buttonProps={{
            colorScheme: teamColor,
            onClick: () => {
              setChangeQues(Math.random());
            },
          }}
        />
      </HStack>
    </>
  );

  const answerOptions = (
    <>
      <HStack>
        <IconButton
          icon={<FaRegSmileBeam />}
          {...{
            "aria-label": "Correct ",
            colorScheme: teamColor,
            onClick: () => {
              setQuestionState("answer");
              //setQuestionState(true);
            },
          }}
        />
        <IconButton
          icon={<FaRegFrown />}
          {...{
            "aria-label": "Incorrect",
            colorScheme: teamColor,
            onClick: () => {
              setQuestionState("answer");
              //setQuestionState(true);
            },
          }}
        />
      </HStack>
    </>
  );

  return (
    <>
      <ModalContent border={"1px"} borderColor={teamColor}>
        <Fade in={isOpen}>
          <ModalHeader>
            <Center>
              {questionState === "question" ? (
                <>
                  <Text mr={5} fontSize={"4xl"} color={teamColor}>
                    Question
                  </Text>

                  <Timer start={true} seconds={15} />
                </>
              ) : (
                <>
                  <Text fontSize={"4xl"} color={teamColor}>
                    Answer
                  </Text>
                </>
              )}
            </Center>
          </ModalHeader>
          <ModalCloseButton color={teamColor} />
          <Divider bg={teamColor}></Divider>
          <ModalBody>
            <>
              {questionState === "question" ? (
                <>
                  <Center>
                    <Text fontSize={"5xl"}>{modalProps.question.problem}</Text>
                  </Center>
                </>
              ) : (
                <>
                  <Center>
                    <Text fontSize={"5xl"}>{modalProps.question.solution}</Text>
                  </Center>
                </>
              )}
            </>
          </ModalBody>
          <Divider bg={teamColor}></Divider>
          <ModalFooter>
            {questionState === "question" ? questionOptions : answerOptions}
          </ModalFooter>
        </Fade>
      </ModalContent>
    </>
  );
}
