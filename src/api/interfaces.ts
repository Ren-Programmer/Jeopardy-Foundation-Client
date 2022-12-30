import { AxiosResponse } from "axios";
import { PlayGameInstanceDTO } from "components/GameInstance/interfaces/game-instance-dtos";

export default interface IAgentGenericCalls {
  Items: (params: URLSearchParams) => Promise<AxiosResponse<any, any>>;
  Item: (id: string) => Promise<AxiosResponse<any, any>>;
  Create: (body: {}) => Promise<AxiosResponse<any, any>>;
  Update: (data: { id: string; body: {} }) => Promise<AxiosResponse<any, any>>;
  Delete: (data: { id: string }) => Promise<AxiosResponse<any, any>>;
  Select?: (params: URLSearchParams) => Promise<AxiosResponse<any, any>>;
}

export interface GameCreationAgentGenericCalls extends IAgentGenericCalls {}

export interface GameQuestionAgentGenericCalls extends IAgentGenericCalls {
  GetQuestionsForGame: (id: string) => Promise<AxiosResponse<any, any>>;
}

export interface GameCategoryAgentGenericCalls extends IAgentGenericCalls {
  GetCategoriesForGame: (id: string) => Promise<AxiosResponse<any, any>>;
}

export interface GameQuestionValueAgentGenericCalls extends IAgentGenericCalls {
  GetQuestionValuesForGame: (id: string) => Promise<AxiosResponse<any, any>>;
}

export interface ServerErrorResult {
  isValid: boolean;
  errors: ServerError[];
}

export interface ServerError {
  propertyName: string;
  errorMessage: string;
}

export interface ServerResponse {
  statusCode: 200 | 201 | 400 | 500 | 402;
  isSuccess: boolean;
  result: object | ServerErrorResult;
}

export interface BaseSearchParams {
  orderBy?: string;
  searchCriteria?: string;
  pageNumber?: number;
  pageSize?: number;
}
export interface GameInstanceAgentGenericCalls extends IAgentGenericCalls {
  GetPlayGame: (
    id: string
  ) => Promise<AxiosResponse<CallResponse<PlayGameInstanceDTO>, any>>;
  UpdateCurrentTeam: ({
    gameInstanceId,
    currentTeamId,
  }: {
    gameInstanceId: string;
    currentTeamId: string;
  }) => Promise<AxiosResponse<any, any>>;
}

export interface CallResponse<T> {
  errorMessages: any;
  isSuccess: boolean;
  result: T;
  statusCode: number;
}
