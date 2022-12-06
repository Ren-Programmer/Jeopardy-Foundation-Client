import { Flex, Spacer } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import FormControl from "shared/components/FormControl";
import RangeSlider from "shared/components/range-slider/RangeSlider";

export interface IAgeGroupRange {
  formHook: UseFormReturn<any, any>;
}

export default function AgeGroupRange({ formHook }: IAgeGroupRange) {
  const { register, setValue, getValues,  } = formHook;
  return (
    <>
      <FormControl
        label={"Age Group Range"}
        isRequired={true}
        placeHolder={"Provide Range by moving the slider above"}
        input={
          <>
            <RangeSlider
            setValue={setValue}
              maxVal={{name:"maxAge", val:106}}
              minVal={{name:"minAge", val:1}}
              minDistance={10}
              props={formHook}
              otherProps={{
                minProps: {
                  ...register("minAge", {
                    required: " Age is required",
                  }),
                },
                maxProps: {
                    ...register("maxAge", {
                        required: " Age is required",
                      }),
                },
              }}
            />
          </>
        }
      />
    </>
  );
}
