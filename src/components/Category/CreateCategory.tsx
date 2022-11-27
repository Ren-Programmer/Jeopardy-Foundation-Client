import { useEffect } from "react";
import {
  FormState,
  useForm,
  useFormContext,
  UseFormRegister,
  UseFormReset,
  UseFormReturn,
} from "react-hook-form";
import TextInput from "shared/components/input/TextInput";
import CategoryDescription from "./HTML/CategoryDescription";
import CategoryName from "./HTML/CategoryName";
import { ICreateCategoryDTO } from "./interfaces/category-dtos";

export interface ICreateCategory {}

export default function CreateCategory({}: ICreateCategory) {
  const formHook = useFormContext<ICreateCategoryDTO>();
  return (
    <>     
      <CategoryName
        formHook={formHook}       
      />
      <CategoryDescription
      formHook={formHook}
      />   
    </>
  );
}
