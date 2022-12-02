import { useFormContext } from "react-hook-form";
import CategoryDescription from "./HTML/CategoryDescription";
import CategoryName from "./HTML/CategoryName";
import { IViewCategoryDTO } from "./interfaces/category-dtos";

export default function DeleteCategory(){
    const formHook = useFormContext<IViewCategoryDTO>();
    return <>
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
}