

import FormControl from "shared/components/FormControl";
import Slider from "shared/components/slider/Slider";
import { Age } from "./MinAge";

export default function MaxAge({ formHook,props={} }: Age) {
    return (
      <>
        <FormControl
        errorMessage={formHook.formState.errors.maxAge?.message as string | undefined}
          label={"Maximum Age"}
          isRequired={true}
          placeHolder={"Provide Range by moving the slider above"}
          input={
            <>
              <Slider 
                 rules={{
                  validate: (value: number) => {
                    const minValue = formHook.getValues()["minAge"]    
                    console.log(minValue, value)                
                    if (value <= minValue) return "Maximum Age cannot be greater Minimum Age"
                    return true;
                  },
                }}
              props={props}
              formHook={formHook} name={"maxAge"}/>
            </>
          }
        />
      </>
    );
  }
  