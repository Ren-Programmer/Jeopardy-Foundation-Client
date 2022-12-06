import { useFormContext } from "react-hook-form";
import AgeGroupDescription from "./HTML/AgeGroupDescription";
import AgeGroupName from "./HTML/AgeGroupName";
import MaxAge from "./HTML/MaxAge";
import MinAge from "./HTML/MinAge";
import { ICreateAgeGroupDTO } from "./interfaces/age-group-dtos";

export default function UpdateAgeGroup(){
    const formHook = useFormContext<ICreateAgeGroupDTO>();
  return (
    <>
      <AgeGroupName formHook={formHook} />
      <AgeGroupDescription formHook={formHook} />

      <MinAge formHook={formHook} />
      <MaxAge formHook={formHook} />
    </>
  );
}