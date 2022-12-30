import { useColorMode } from "@chakra-ui/react";
import agent from "api/agent";
import PlayGameContext from "Contexts/PlayGameContext";
import { useContext, useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router";
import {
  IGamePlayQuestionDTO,
  PlayGameInstanceDTO,
  TeamDTO,
} from "./interfaces/game-instance-dtos";
const initial: IGamePlay = {
  gamePlay: {
    title: "",
    id: "",
    categories: [],
    questionValues: [],
    questions: [],
    teams: [],
    currentTeamId: null,
    time: 0,
  },
  gameProps: { currentTeam: { id: "", name: "", score: 2, teamColor: "" } },
  modalProps: {
    show: false,
    question: {
      answerStatus: "NotAnswered",
      category: "",
      categoryId: "",
      id: "",
      multiplier: "",
      problem: "",
      questionValueId: "",
      solution: "",
      value: 1,
    },
  },
};

export default function useGamePlay() {
  const { currentTeam } = useContext(PlayGameContext);

  const location = useLocation();
  const params = location.search.replace("?", "").split("&");
  const idParam = params.find((x) => x.split("=")[0] === "id")!.split("=")[1];
  const { colorMode } = useColorMode();
  const [loading, isLoading] = useState(true);
  const [{ gamePlay, gameProps, modalProps }, dispatch] = useReducer(
    reducer,
    initial
  );

  useEffect(() => {
    async function oo() {
      return await agent.GameInstances.GetPlayGame(idParam);
    }

    oo().then((response) => {
      dispatch({
        type: "initial",
        data: response.data.result,
      });
    });
  }, []);

  return {
    gamePlay,
    colorMode,
    gameProps,
    dispatch,
    modalProps,
    setQuestion: (question: IGamePlayQuestionDTO) => {
      dispatch({ type: "setQuestion", data: question });
    },
    onClose: () => {
      dispatch({ type: "closeModal", data: undefined });
    },
  };
}

export interface IGamePlay {
  gamePlay: PlayGameInstanceDTO;
  gameProps: GamePlayProps;
  modalProps: QuestionModalProps;
}
export interface IGamePlayAction {
  type: "initial" | "changeTeam" | "setQuestion" | "closeModal";
  data: any | PlayGameInstanceDTO | IGamePlayQuestionDTO;
}
export interface GamePlayProps {
  currentTeam: TeamDTO;
}

export interface QuestionModalProps {
  show: boolean;
  question: IGamePlayQuestionDTO;
}

function reducer(state: IGamePlay, action: IGamePlayAction): IGamePlay {
  switch (action.type) {
    case "initial": {
      console.log(action.data);
      let game = { ...state.gamePlay };
      game = { ...action.data };
      game.currentTeamId =
        game.currentTeamId === "00000000-0000-0000-0000-000000000000"
          ? game.teams[0].id
          : game.currentTeamId; //Who goes First?
      let gameProps: GamePlayProps = {
        currentTeam: (action.data as PlayGameInstanceDTO).teams.find(
          (x) => x.id === game.currentTeamId
        )!,
      };
      console.log(gameProps);
      return {
        ...state,
        gamePlay: {
          ...state.gamePlay,
          ...game,
        },
        gameProps: {
          ...state.gameProps,
          ...gameProps,
        },
      };
    }
    case "changeTeam": {
      const currentTeam = state.gamePlay.teams.find(
        (x) => x.id !== state.gamePlay.currentTeamId
      )!;
      agent.GameInstances.UpdateCurrentTeam({
        gameInstanceId: state.gamePlay.id,
        currentTeamId: currentTeam.id,
      })
        .then()
        .catch((err) => {
          console.log(err);
        });

      return {
        ...state,
        gamePlay: {
          ...state.gamePlay,
          currentTeamId: currentTeam.id,
        },
        gameProps: {
          ...state.gameProps,
          currentTeam: currentTeam,
        },
      };
    }
    case "setQuestion": {
      const question = action.data as IGamePlayQuestionDTO;
      let modalProps = { ...state.modalProps };
      modalProps.show = true;
      modalProps.question = question;
      return {
        ...state,
        modalProps: modalProps,
      };
    }
    case "closeModal": {
      return {
        ...state,
        modalProps: {
          show: false,
          question: initial.modalProps.question,
        },
      };
    }
  }
  return { ...state };
}
