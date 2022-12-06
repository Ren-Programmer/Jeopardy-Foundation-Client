import { useFormContext } from "react-hook-form";
import RangeSlider from "shared/components/range-slider/RangeSlider";
import AgeGroupDescription from "./HTML/AgeGroupDescription";
import AgeGroupName from "./HTML/AgeGroupName";
import AgeGroupRange from "./HTML/AgeGroupRange";
import MaxAge from "./HTML/MaxAge";
import MinAge from "./HTML/MinAge";
import { ICreateAgeGroupDTO } from "./interfaces/age-group-dtos";

export default function CreateAgeGroup() {
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
