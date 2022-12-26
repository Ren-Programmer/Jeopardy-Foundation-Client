import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { IQuestionsDTO } from "components/Question/interfaces/question-dtos";
import Questions from "components/Question/Questions";
import GameCreationContext from "Contexts/GameCreationContext";
import { useContext, useEffect, useMemo, useState } from "react";

export interface IGameQuestionSource {}
export default function GameQuestionSource({}: IGameQuestionSource) {
  const {channel} = useContext(GameCreationContext);
  const [question, setQuestion] = useState<IQuestionsDTO>();

  useEffect(() => {
    if (question) {
      channel.postMessage({
        question,
      });     
      window.close();
      return channel.close;
    }
  }, [question]);

  return (
    <>
      <Text>
        Please search for tghe question beloow, and select by double clicking on
        the row
      </Text>
      <Questions
        tableRowDoubleClick={(data: IQuestionsDTO) => setQuestion(data)}
      />
    </>
  );
}
