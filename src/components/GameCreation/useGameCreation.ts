import { useColorMode } from "@chakra-ui/react";
import agent from "api/agent";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import {
  IGameCategory,
  IGameDeisgn,
  IGameQuestion,
} from "./interfaces/game-creationd-tos";

export default function useGameCreation() {
  const [loading, setLoading] = useState(true);
  const { colorMode } = useColorMode();
  const location = useLocation();
  const params = location.search.replace("?", "").split("&");
  const idParam = params.find((x) => x.split("=")[0] === "id")!.split("=")[1];
  const [questionValues, setQuestionValues] = useState<IQuestionValue[]>([]);
  const [game, setGame] = useState<IGameDeisgn>({ title: "" });
  const [categories, setCategories] = useState<IGameCategory[]>([]);
  const [questions, setQuestions] = useState<IGameQuestion[]>([]);

  useEffect(() => {
    async function questionValueCall() {
      return await agent.QuestionValue.Items(new URLSearchParams());
    }
    async function gameCall() {
      return await agent.GameCreation.Item(idParam);
    }
    async function gameCategoriesCall() {
      return await agent.GameCreation.GetCategoriesForGame(idParam);
    }
    async function gameQuestionsCall() {
      return await agent.GameQuestion.GetQuestionsForGame(idParam);
    }
    if (loading === true) {
      gameCall().then((response) => {
        setGame(response.data.result);
      });

      questionValueCall().then((response) => {
        setQuestionValues(response.data.items);
      });

      gameCategoriesCall().then((response) =>
        setCategories(response.data.result)
      );

      gameQuestionsCall().then((response) =>
        setQuestions(response.data.result)
      );
    }
  }, []);

  useEffect(() => {
    setLoading(false);
    console.log(questions);
  }, [questions]);

  return {
    colorMode,
    questionValues,
    loading,
    game,
    categories,
    questions
  };
}
