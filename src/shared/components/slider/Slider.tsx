import {
  InputProps,
  SliderProps,
  Slider as CSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderMark,
  Box,
  useSlider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

export interface ISlider {
  formHook: UseFormReturn;
  name: string;
  min?: number;
  max?: number;
  props: any;
  rules?:Object
}

export default function Slider({
  formHook,
  name,
  props,
  min = 1,
  max = 105,
  rules={}
}: ISlider) {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  const { actions, state, getInputProps } = useSlider({});

  const [sliderValue, setSliderValue] = useState(formHook.getValues()[name]);
  useEffect(() => {
    setSliderValue(formHook.getValues()[name]);
  }, [formHook.formState.isDirty]);

  return (
    <>
      <Controller 
        control={formHook.control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Box pt={6} pb={2} mb={2}>
            {/* {sliderValue} */}
            <CSlider
              {...(props as any)}
              min={min}
              max={max}
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setSliderValue(e);
              }}
            >
              <SliderMark value={25} {...labelStyles}>
                25
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {sliderValue}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </CSlider>
          </Box>
        )}
      />
    </>
  );
}
