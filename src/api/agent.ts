import axios, { AxiosResponse, AxiosError } from "axios";
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
   if(pagination){
    const ff = JSON.parse(response.headers["pagination"]!) as PaginationProps
    console.log(ff)
    response.data = {
      items:response.data.result, 
      pagination:ff
    }
   }
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
  get: (url: string, params?:URLSearchParams) => {
    return axios.get(url,{params}).then(requestBody);
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
  Items: (params:URLSearchParams) => {
    return requests.get("CategoryAPI", params);
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

const AgeGroup: IAgentGenericCalls = {
  Items: (params:URLSearchParams) => {
    return requests.get("AgeGroupAPI", params);
  },
  Item: (id: string) => {
    return requests.get(`AgeGroupAPI/${id}`);
  },
  Create: (body: {}) => {
    console.log(body)
    return requests.post("AgeGroupAPI", body);
  },
  Update:(data:any) =>{
    console.log(data)
    return requests.put(`AgeGroupAPI/${data.id}`,data);
  },
  Delete:(data:any) =>{
    console.log(data)
    return requests.delete(`AgeGroupAPI/${data.id}`);
  },
};



const agent = {
  Category,AgeGroup
};
export default agent;
