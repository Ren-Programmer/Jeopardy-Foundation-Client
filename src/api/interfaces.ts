import { AxiosResponse } from "axios";

export default interface IAgentGenericCalls {
  Items: (params: URLSearchParams) => Promise<AxiosResponse<any, any>>;
  Item: (id: string) => Promise<AxiosResponse<any, any>>;
  Create: (body: {}) => Promise<AxiosResponse<any, any>>;
  Update: (data: { id: string; body: {} }) => Promise<AxiosResponse<any, any>>;
  Delete: (data: { id: string }) => Promise<AxiosResponse<any, any>>;
  Select?: (params: URLSearchParams) => Promise<AxiosResponse<any, any>>;
}

export interface GameCreationAgentGenericCalls extends IAgentGenericCalls {
  GetCategoriesForGame:(id: string) => Promise<AxiosResponse<any, any>>;
}

export interface GameQuestionAgentGenericCalls extends IAgentGenericCalls {
  GetQuestionsForGame:(id: string) => Promise<AxiosResponse<any, any>>;
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
