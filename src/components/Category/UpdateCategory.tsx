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
import { IUpdateCategoryDTO } from "./interfaces/category-dtos";

export interface IUpdateCategory {}

export default function UpdateCategory({}: IUpdateCategory) {
  const formHook = useFormContext<IUpdateCategoryDTO>();
  return (
    <>
      <CategoryName formHook={formHook} />
      <CategoryDescription formHook={formHook} />
    </>
  );
}
