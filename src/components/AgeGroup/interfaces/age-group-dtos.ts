import { ListDTOCommon } from "shared/interfaces/dtos";

export interface IAgeGroupsDTO extends commonProps, ListDTOCommon { 
}

export interface IViewAgeGroupDTO extends commonProps {}

export interface ICreateAgeGroupDTO extends commonProps {}

interface commonProps {
  name: string;
  description: string;
  minAge:number;
  maxAge:number
}

export interface IUpdateAgeGroupDTO extends commonProps{
  id:string
}