import axios, { AxiosResponse, AxiosError } from "axios";
import { ICreateQuestionDTO } from "components/Question/interfaces/question-dtos";
import { toast } from "react-toastify";
import { PaginationProps } from "shared/components/pagination/Pagination";
import { AsyncKeyword } from "typescript";
import IAgentGenericCalls from "./interfaces";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

// const securedApiURL = process.env.API_URL_S;
axios.defaults.baseURL = "https://localhost:7271/api/";

const requestBody = (response: AxiosResponse) => response;
//const errorRequestBody = (error: AxiosError<any, any>) => error.response!;

axios.interceptors.response.use(
  async (response) => {
    await sleep();
    const pagination = response.headers["pagination"];
    if (pagination) {
      const ff = JSON.parse(response.headers["pagination"]!) as PaginationProps;
      console.log(response);
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
        toast.error(
          "Process cannot be completed at this time, please contact IT, or try again later"
        );
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

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
  QuestionDifficulty:()=>{
    return requests.get("QuestionAPI/Difficulty");
  }
}


const agent = {
  Category,
  AgeGroup,
  Question,
  Helper
};
export default agent;
