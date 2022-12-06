import { useFormContext } from "react-hook-form";
import AgeGroupDescription from "./HTML/AgeGroupDescription";
import AgeGroupName from "./HTML/AgeGroupName";
import MaxAge from "./HTML/MaxAge";
import MinAge from "./HTML/MinAge";
import { ICreateAgeGroupDTO } from "./interfaces/age-group-dtos";

export default function ViewAgeGroup(){
    const formHook = useFormContext<ICreateAgeGroupDTO>();
    return (
      <>
        <AgeGroupName 
        additionalInputProps={{
            isReadOnly:true
        }}
        formHook={formHook} />
        <AgeGroupDescription 
        additionalInputProps={{
            isReadOnly:true
        }}
        formHook={formHook} />
  
        <MinAge
        props={{
            isReadOnly:true
        }}
        formHook={formHook} />
        <MaxAge 
        props={{
            isReadOnly:true
        }}
        formHook={formHook} />
      </>
    );
}