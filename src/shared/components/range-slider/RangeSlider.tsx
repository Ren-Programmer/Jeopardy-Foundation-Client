import {
  RangeSlider as CRangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Tooltip,
  Flex,
  Spacer,
  RangeSliderProps,
  Hide,
  Input,
  InputProps,
  useRangeSlider,
} from "@chakra-ui/react";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Controller, useForm, UseFormSetValue } from "react-hook-form";
import FormControl from "../FormControl";
import Label from "../label/Label";

export interface IRangeSlider {
  props: any;
  minVal: { val: number; name: string };
  maxVal: { val: number; name: string };
  minDistance?: number;
  otherProps: {
    minProps: InputProps;
    maxProps: InputProps;
  };
  setValue: UseFormSetValue<any>;
}

export default function RangeSlider({
  minVal,
  maxVal,
  minDistance = 0,
  props,
  otherProps,
  setValue,
}: IRangeSlider) {
  const [sumn, setSumn] = useState(1);
  useEffect(() => {
    actions.reset();
  }, [sumn]);
  const y = useRef<LegacyRef<HTMLInputElement>>();
  const { state, getTrackProps, getInputProps, actions } = useRangeSlider({});
  const [min, setMin] = useState(minVal);
  const [max, setMax] = useState(maxVal);
  const mint = otherProps.minProps;
  const maxt = otherProps.maxProps;
  useEffect(() => {
    setValue(min.name, min.val);
  }, [min.val]);
  useEffect(() => {
    console.log("sf");
    setValue(max.name, max.val);
  }, [max.val]);

  useEffect(() => {
    console.log("fvew");
    actions.reset();
  }, [y.current]);

  return (
    <>
     <Controller
        control={props.control}
        name="minAge"
        render={({ field }) => (
         <>
         
      <Hide> 
      <Input {...mint} />
      <Input {...maxt} />
       </Hide>
      <Flex mb={2}>
        Min: {min.val}
        <Spacer></Spacer>
        Max: {max.val}
      </Flex>
      <CRangeSlider {...field}
        //{...otherProps}
        //{...props}
        //{...props.register("ageGroup")}
        colorScheme={"messenger"}
        aria-label={["min", "max"]}
        min={minVal.val}
        max={maxVal.val}
        //value={[min.val, max.val]}
        //value={[values.current.min, values.current.max]}
        // defaultValue={[min.val, max.val]}
        // onChange={(val) => {
        //   props.setValue("ageGroup", val);
        //   setMin({ ...minVal, val: val[0] });
        //   setMax({ ...maxVal, val: val[1] });
        // }}
        minStepsBetweenThumbs={minDistance}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}></RangeSliderThumb>
        <RangeSliderThumb index={1}></RangeSliderThumb>
      </CRangeSlider>
    
         </>
        )}
      />
    </>
  );
}
