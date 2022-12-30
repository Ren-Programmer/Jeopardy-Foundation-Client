import axios, { AxiosResponse, AxiosError } from "axios";
import { PlayGameInstanceDTO } from "components/GameInstance/interfaces/game-instance-dtos";
import { ICreateQuestionDTO } from "components/Question/interfaces/question-dtos";
import AppContext from "Contexts/AppContext";
import { useContext } from "react";
import { PaginationProps } from "shared/components/pagination/Pagination";
import { AsyncKeyword } from "typescript";
import IAgentGenericCalls, {
  CallResponse,
  GameCategoryAgentGenericCalls,
  GameCreationAgentGenericCalls,
  GameInstanceAgentGenericCalls,
  GameQuestionAgentGenericCalls,
  GameQuestionValueAgentGenericCalls,
} from "./interfaces";
import useAgent from "./useAgent";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
// const securedApiURL = process.env.API_URL_S;
axios.defaults.baseURL = "https://localhost:7271/api/";
//const { toast } = useContext(AppContext);
const requestBody = (response: AxiosResponse) => response;
//const errorRequestBody = (error: AxiosError<any, any>) => error.response!;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    await sleep();
    const pagination = response.headers["pagination"];
    if (pagination) {
      const ff = JSON.parse(response.headers["pagination"]!) as PaginationProps;
      //console.log(response);
      response.data = {
        items: response.data.result,
        pagination: ff,
      };
      return response;
    }
    // response.data = {
    //  items:response.data.result
    // }
    //console.log(response)
    return response;
  },
  (error: AxiosError<any, any>) => {
    const { data, status } = error.response!;
    switch (status) {
      // case 400:
      //   console.log(data)
      //   toast.error(data.title);
      //   break;

      case 500:
        // GenericToast(toast, {
        //   title: "Error",
        //   description:
        //     "Process cannot be completed at this time, please contact IT, or try again later",
        //   status: "error",
        //   position: "top",
        //   duration: 5000,
        // });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

//axios.interceptors.request.use(async r)

const requests = {
  get: (url: string, params?: URLSearchParams) => {
    return axios.get(url, { params }).then(requestBody);
  },
  post: (url: string, body: {}) => {
    return axios.post(url, body).then(requestBody);
  },
  put: (url: string, body: {}) => {
    return axios.put(url, body).then(requestBody);
  },
  delete: (url: string) => {
    return axios.delete(url).then(requestBody);
  },
};

//Local development hence no encryption is done. On Production, SSL will be used via HTTPS
const Account = {
  login: (values: any) => requests.post("security/login", values),
  currentUser: () => requests.get("security/currentUser"),
};

const Category: IAgentGenericCalls = {
  Items: (params: URLSearchParams) => {
    return requests.get("CategoryAPI", params);
  },
  Item: (id: string) => {
    return requests.get(`CategoryAPI/${id}`);
  },
  Create: (body: {}) => {
    return requests.post("CategoryAPI", body);
  },
  Update: (data: any) => {
    console.log(data);
    return requests.put(`CategoryAPI/${data.id}`, data);
  },
  Delete: (data: any) => {
    console.log(data);
    return requests.delete(`CategoryAPI/${data.id}`);
  },
  Select: (params: URLSearchParams) => {
    return requests.get("CategoryAPI/Select", params);
  },
};

const AgeGroup: IAgentGenericCalls = {
  Items: (params: URLSearchParams) => {
    return requests.get("AgeGroupAPI", params);
  },
  Item: (id: string) => {
    return requests.get(`AgeGroupAPI/${id}`);
  },
  Create: (body: {}) => {
    console.log(body);
    return requests.post("AgeGroupAPI", body);
  },
  Update: (data: any) => {
    console.log(data);
    return requests.put(`AgeGroupAPI/${data.id}`, data);
  },
  Delete: (data: any) => {
    console.log(data);
    return requests.delete(`AgeGroupAPI/${data.id}`);
  },
  Select: (params: URLSearchParams) => {
    return requests.get("AgeGroupAPI/Select", params);
  },
};

const Question: IAgentGenericCalls = {
  Items: (params: URLSearchParams) => {
    return requests.get("QuestionAPI", params);
  },
  Item: (id: string) => {
    return requests.get(`QuestionAPI/${id}`);
  },
  Create: (body: {}) => {
    // const y = body as any
    // let bbody: ICreateQuestionDTO;
    // bbody = { ...(body as any), categoryId:y.category.value };
    console.log(body);
    return requests.post("QuestionAPI", body);
  },
  Update: (data: any) => {
    console.log(data);
    return requests.put(`QuestionAPI/${data.id}`, data);
  },
  Delete: (data: any) => {
    console.log(data);
    return requests.delete(`QuestionAPI/${data.id}`);
  },
};

const Helper = {
  QuestionDifficulty: () => {
    return requests.get("QuestionAPI/Difficulty");
  },
};

const GameCreation: GameCreationAgentGenericCalls = {
  Items: (params: URLSearchParams) => {
    return requests.get("GameBluePrintAPI", params);
  },
  Item: function (id: string): Promise<AxiosResponse<any, any>> {
    return requests.get(`GameBluePrintAPI/${id}`);
  },
  Create: function (body: {}): Promise<AxiosResponse<any, any>> {
    return requests.post("GameBluePrintAPI", body);
  },
  Update: function (data: any): Promise<AxiosResponse<any, any>> {
    return requests.put(`GameBluePrintAPI/${data.id}`, data);
  },
  Delete: function (data: { id: string }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
};

const GameQuestionValue: GameQuestionValueAgentGenericCalls = {
  Items: (params: URLSearchParams) => {
    return requests.get("QuestionValueAPI", params);
  },
  Item: function (id: string): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Create: function (body: {}): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Update: function (data: any): Promise<AxiosResponse<any, any>> {
    return requests.put(`GameQuestionValueAPI/${data.id}`, data.body);
  },
  Delete: function (data: { id: string }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  GetQuestionValuesForGame: function (
    id: string
  ): Promise<AxiosResponse<any, any>> {
    return requests.get(`GameQuestionValueAPI/GetQuestionValuesForGame/${id}`);
  },
};

const GameQuestion: GameQuestionAgentGenericCalls = {
  GetQuestionsForGame: function (id: string): Promise<AxiosResponse<any, any>> {
    return requests.get(`GameQuestionAPI/GetQuestionsForGame/${id}`);
  },
  Items: function (params: URLSearchParams): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Item: function (id: string): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Create: function (body: {}): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Update: function (data: {
    id: string;
    body: {};
  }): Promise<AxiosResponse<any, any>> {
    return requests.put(`GameQuestionAPI/${data.id}`, data.body);
  },
  Delete: function (data: { id: string }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
};

const GameCategory: GameCategoryAgentGenericCalls = {
  GetCategoriesForGame: (id: string) => {
    return requests.get(`GameCategoryAPI/GetCategoriesForGame/${id}`);
  },
  Items: function (params: URLSearchParams): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Item: function (id: string): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Create: function (body: {}): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Update: function (data: any): Promise<AxiosResponse<any, any>> {
    console.log(data);
    return requests.put(`GameCategoryAPI/${data.id}`, data.body);
  },
  Delete: function (data: { id: string }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
};

const GameInstances: GameInstanceAgentGenericCalls = {
  Items: function (params: URLSearchParams): Promise<AxiosResponse<any, any>> {
    return requests.get("GameInstanceAPI", params);
  },
  Item: function (id: string): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Create: function (body: {}): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Update: function (data: {
    id: string;
    body: {};
  }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  Delete: function (data: { id: string }): Promise<AxiosResponse<any, any>> {
    throw new Error("Function not implemented.");
  },
  GetPlayGame: function (
    id: string
  ): Promise<AxiosResponse<CallResponse<PlayGameInstanceDTO>, any>> {
    return requests.get(`GameInstanceAPI/PlayGame/${id}`);
  },
  UpdateCurrentTeam: function ({
    gameInstanceId,
    currentTeamId,
  }: {
    gameInstanceId: string;
    currentTeamId: string;
  }): Promise<AxiosResponse<any, any>> {
    return requests.post("GameInstanceAPI/UpdateCurrentTeam", {
      gameInstanceId,
      currentTeamId,
    });
  },
};

const agent = {
  Category,
  AgeGroup,
  Question,
  Helper,
  Account,
  GameCreation,
  GameQuestionValue,
  GameQuestion,
  GameCategory,
  GameInstances,
};
export default agent;
