import { ListDTOCommon } from "shared/interfaces/dtos";

export interface ICategoriesDTO extends commonProps, ListDTOCommon { 
}

export interface IViewCategoryDTO extends commonProps {}

export interface ICreateCategoryDTO extends commonProps {}

interface commonProps {
  name: string;
  description: string;
}

export interface IUpdateCategoryDTO extends commonProps{
  id:string
}