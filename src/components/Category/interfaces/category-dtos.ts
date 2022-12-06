import { ListDTOCommon } from "shared/interfaces/dtos";

export interface ICategoriesDTO extends ICategoryCommonProps, ListDTOCommon { 
}

export interface IViewCategoryDTO extends ICategoryCommonProps {}

export interface ICreateCategoryDTO extends ICategoryCommonProps {}

export interface ICategoryCommonProps {
  name: string;
  description: string;
}

export interface IUpdateCategoryDTO extends ICategoryCommonProps{
  id:string
}