import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";
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
        toast.error("Process cannot be completed at this time, please contact IT, or try again later");
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => {
    return axios.get(url).then(requestBody);
  },
  post: (url: string, body: {}) => {
    return axios.post(url, body).then(requestBody);
  },
  put:(url:string, body:{})=>{
    return axios.put(url,body).then(requestBody);
  },
  delete:(url:string)=>{
    return axios.delete(url).then(requestBody)
  }
};

const Category: IAgentGenericCalls = {
  Items: () => {
    return requests.get("CategoryAPI");
  },
  Item: (id: string) => {
    return requests.get(`CategoryAPI/${id}`);
  },
  Create: (body: {}) => {
    return requests.post("CategoryAPI", body);
  },
  Update:(data:any) =>{
    console.log(data)
    return requests.put(`CategoryAPI/${data.id}`,data);
  },
  Delete:(data:any) =>{
    console.log(data)
    return requests.delete(`CategoryAPI/${data.id}`);
  },
};

const agent = {
  Category,
};
export default agent;
