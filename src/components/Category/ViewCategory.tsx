import { useFormContext } from "react-hook-form";
import CategoryDescription from "./HTML/CategoryDescription";
import CategoryName from "./HTML/CategoryName";
import { ICreateCategoryDTO, IViewCategoryDTO } from "./interfaces/category-dtos";

export default function ViewCategory() {
  const formHook = useFormContext<ICreateCategoryDTO>();
  return (
    <>
      <CategoryName
        formHook={formHook} 
        additionalInputProps={{
          isReadOnly:true
        }}      
      />
      <CategoryDescription
      formHook={formHook}
      additionalInputProps={{
        isReadOnly:true
      }}
      />   
    </>
  );
}
