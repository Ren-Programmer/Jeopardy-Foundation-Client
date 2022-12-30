import {
  IGameCategoryDTO,
  IGameQuestionDTO,
} from "components/GameCreation/interfaces/game-creationd-tos";
import { IQuestionValue } from "components/QuestionValue/interfaces/question-values-dtos";

export interface PlayGameInstanceDTO {
  title: string;
  id: string;
  categories: IGameCategoryDTO[];
  questionValues: IQuestionValue[];
  questions: IGamePlayQuestionDTO[];
  teams: TeamDTO[];
  currentTeamId: string | null;
  time:number
}

export interface IGamePlayQuestionDTO extends IGameQuestionDTO {
  answerStatus: "NotAnswered" | "Correct" | "Incorrect";
}

export interface TeamDTO {
  name: string;
  score: number;
  teamColor: string;
  id: string;
}
