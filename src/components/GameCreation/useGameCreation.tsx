import { Text, useColorMode } from "@chakra-ui/react";
import agent from "api/agent";
import { addServerErrors } from "api/agentMethods";
import { ServerError, ServerErrorResult } from "api/interfaces";
import { AxiosResponse } from "axios";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";
import AppContext from "Contexts/AppContext";
import {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { useToast } from "shared/components/toast/useToast";
import { IGameCreationModal } from "./game-creation-modal/GameCreationModal";
import {
  IGameCategoryDTO,
  IGameDeisgnDTO,
  IGameQuestionDTO,
} from "./interfaces/game-creationd-tos";

interface modalBodyInfoProps {
  data: IGameQuestionDTO | IGameCategoryDTO;
  type: "question" | "category" | "questionValue";
  method: (data: any) => Promise<AxiosResponse<any, any>>;
}

export interface GameCreationModalState {
  status: boolean;
  data?: IGameQuestionDTO | IGameCategoryDTO;
  submitType: ISubmtProps;
  method: (data: any) => Promise<AxiosResponse<any, any>>;
}
export interface modalAction {
  type: "modalOn" | "modalOff" | "modalBodyInfo" | "setType";
  data?: any | modalBodyInfoProps;
}

export default function useGameCreation() {
  const { ErrorToast, toast, ProcessingToast, SuccessToast } = useToast();
  const [loading, setLoading] = useState(true);
  const { colorMode } = useColorMode();
  const location = useLocation();
  const params = location.search.replace("?", "").split("&");
  const idParam = params.find((x) => x.split("=")[0] === "id")!.split("=")[1];
  const iModalProps: GameCreationModalState = {
    status: false,
    submitType: { type: "question" },
    method: agent.GameQuestion.Update,
  };

  const initial: IGameQuestionState = {
    questions: [],
    categories: [],
    game: { title: "" },
    questionValues: [],
  };

  const [modalProps, modalDispatch] = useReducer(modalReducer, iModalProps);
  const [{ game, questions, categories, questionValues }, dispatch] =
    useReducer(questionReducer, initial);

  useEffect(() => {
    if (loading === true) {
      gameCall(idParam).then((response) => {
        dispatch({ type: "setGame", data: response.data.result });
      });
      questionValueCall(idParam).then((response) => {
        dispatch({ type: "setQuestionValues", data: response.data.result });
      });
      gameCategoriesCall(idParam).then((response) =>
        dispatch({ type: "setCategories", data: response.data.result })
      );
      gameQuestionsCall(idParam).then((response) => {
        dispatch({ type: "setQuestions", data: response.data.result });
      });
    }
  }, []);

  useEffect(() => {
    setLoading(false);
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    console.log(modalProps.data);
  }, [modalProps]);

  const formHook = useForm({
    defaultValues: useMemo(() => {
      return modalProps.data;
    }, [modalProps]),
  });

  useEffect(() => {
    formHook.reset(modalProps.data);
  }, [modalProps]);
  useEffect(() => {
    console.log(questions);
  }, [questions]);
  function onSubmit(data: IGameQuestionDTO) {
    let name: string = "";
    let dispatchName:
      | "updateQuestion"
      | "setQuestions"
      | "updateCategory"
      | "setCategories"
      | "setGame"
      | "setQuestionValues" = "setQuestionValues";
    switch (modalProps.submitType.type) {
      case "question": {
        name = "Question";
        dispatchName = "updateQuestion";
        break;
      }
      case "category": {
        name = "Category";
        dispatchName = "updateCategory";
        break;
      }
    }
    const processId = ProcessingToast();
    setTimeout(() => {
      modalProps.method({ id: data.id, body: data })
        .then((x) => {
          toast?.close(processId);
          SuccessToast({
            title: "Success",
            description: `${name} was succesfully updated, you will be redirected.`,
            duration: 4000,
            position: "top-right",
            onCloseComplete: () => {
              dispatch({ type: dispatchName, data: data });
              modalDispatch({ type: "modalOff" });
            },
          });
        })
        .catch((e) => {
          const serverErrorResult: ServerErrorResult = e.data.result;
          addServerErrors(serverErrorResult, formHook);
          if (
            serverErrorResult.errors.find((x) => x.propertyName === "duplicate")
          ) {
            toast?.close(processId);
            ErrorToast({
              title: "Duplicate Error",
              description: (e.data.result.errors as ServerError[]).find(
                (x) => x.propertyName === "duplicate"
              )?.errorMessage,
              position: "top",
              duration: 6000,
            });
          } else {
            toast?.close(processId);
            ErrorToast({
              title: "Error",
              description: "Please correct the errors on the form",
              status: "error",
              duration: 6000,
              position: "top",
            });
          }
        });
    }, 3000);

    //Send off request to database

    //After Processing, sleep for like 3 seconds then close toast
  }
  function onError() {
    const id = ErrorToast({
      title: "Error",
      description: "Please correct the errors on the form",
      status: "error",
      duration: 9000,
      position: "top",
    });
  }
  function onCancel() {
    formHook.reset();
    toast?.closeAll();
  }

  return {
    colorMode,
    questionValues,
    loading,
    game,
    categories,
    questions,
    modalProps,
    formHook,
    onClose: () => {
      modalDispatch({ type: "modalOff" });
    },
    onQuestionOpen: (data: IGameQuestionDTO) => {
      modalDispatch({
        type: "modalBodyInfo",
        data: {
          data,
          type: "question",
          method: agent.GameQuestion.Update,
        } as modalBodyInfoProps,
      });
    },
    onCategoryOpen: (data: IGameCategoryDTO) => {
      modalDispatch({
        type: "modalBodyInfo",
        data: {
          data,
          type: "category",
          method: agent.GameCategory.Update,
        } as modalBodyInfoProps,
      });
    },
    onSubmit,
    onError,
    onCancel,
  };
}

function questionReducer(
  state: IGameQuestionState,
  action: GameQuestionStateAction
): IGameQuestionState {
  const id = action.data as string;
  switch (action.type) {
    case "setGame": {
      return {
        ...state,
        game: action.data,
      };
    }
    case "setQuestionValues": {
      return {
        ...state,
        questionValues: action.data,
      };
    }

    case "setQuestions": {
      return {
        ...state,
        questions: [...action.data],
      };
    }
    case "updateQuestion": {
      const question = action.data as IGameQuestionDTO;
      let questions = [...state.questions];
      let actualQuestion = questions.find((x) => x.id === question.id)!;
      let index = questions.indexOf(actualQuestion);

      actualQuestion = {
        ...actualQuestion,
        problem: question.problem,
        solution: question.solution,
        multiplier: question.multiplier,
      };

      questions[index] = actualQuestion;
      return {
        ...state,
        questions: [...questions],
      };
    }
    case "updateCategory": {      
      const category = action.data as IGameCategoryDTO;
      let categories = [...state.categories];
      let actualCategory = categories.find((x) => x.id === category.id)!;
      let index = categories.indexOf(actualCategory);

      actualCategory = {
        ...actualCategory,
        name: category.name,
        description:category.description
      };

      categories[index] = actualCategory;
      return {
        ...state,
        categories: [...categories],
      };
    }
    case "setCategories": {
      return { ...state, categories: [...action.data] };
    }
  }
  return {
    ...state,
  };
}

function modalReducer(
  modalState: GameCreationModalState,
  action: modalAction
): GameCreationModalState {
  switch (action.type) {
    case "modalOn": {
      return {
        ...modalState,
        status: true,
      };
    }
    case "modalOff": {
      return {
        ...modalState,
        status: false,
        data: undefined,
      };
    }
    case "modalBodyInfo": {
      const props = action.data as modalBodyInfoProps;
      return {
        ...modalState,
        status: true,
        data: props.data,
        submitType: { ...modalState.submitType, type: props.type },
        method: props.method,
      };
    }
    case "setType": {
      const type = action.data;
      return {
        ...modalState,
        submitType: {
          ...modalState.submitType,
          type: action.data,
        },
      };
    }
  }
  return modalState;
}

export interface IGameQuestionState {
  updatedQuestion?: IGameQuestionDTO;
  questions: IGameQuestionDTO[];
  categories: IGameCategoryDTO[];
  game: IGameDeisgnDTO;
  questionValues: IQuestionValue[];
}
export interface GameQuestionStateAction {
  type:
    | "updateQuestion"
    | "setQuestions"
    | "updateCategory"
    | "setCategories"
    | "setGame"
    | "updateCategory"
    | "setQuestionValues";

  data: any;
}
export interface ISubmtProps {
  type: "question" | "category" | "questionValue";
}

async function questionValueCall(idParam: string) {
  return await agent.GameQuestionValue.GetQuestionValuesForGame(idParam);
}
async function gameCall(idParam: string) {
  return await agent.GameCreation.Item(idParam);
}
async function gameCategoriesCall(idParam: string) {
  return await agent.GameCategory.GetCategoriesForGame(idParam);
}
async function gameQuestionsCall(idParam: string) {
  return await agent.GameQuestion.GetQuestionsForGame(idParam);
}
