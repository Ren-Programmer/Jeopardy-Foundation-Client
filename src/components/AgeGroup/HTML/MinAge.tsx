import { SliderProps } from "@chakra-ui/react";
import { Controller, UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import Slider from "shared/components/slider/Slider";

export interface Age {
  formHook: UseFormReturn<any, any>;
  props?: SliderProps;
}

export default function MinAge({ formHook, props = {} }: Age) {
  return (
    <>
      <FormControl
        errorMessage={formHook.formState.errors.minAge?.message as string | undefined}
        label={"Minimum Age"}
        isRequired={true}
        placeHolder={"Provide Range by moving the slider above"}
        input={
          <>
            <Slider
              props={props}
              rules={{
                validate: (value: number) => {
                  const maxValue = formHook.getValues()["maxAge"]
                  console.log(maxValue)
                  if (value >= maxValue) return "Minimum Age cannot be greater Maximum Age"
                  return true;
                },
              }}
              formHook={formHook}
              name={"minAge"}
            />
          </>
        }
      />
    </>
  );
}
