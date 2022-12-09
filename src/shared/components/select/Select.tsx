import { Select as VSelect, SelectProps } from "@chakra-ui/react";
import { Controller, UseFormReturn } from "react-hook-form";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
export interface ISelect {
  formHook: UseFormReturn<any, any>;
  placeHolder?: string;
  name: string;
  defOptions?: { value: string; label: string }[];
  fetchDataCall: () => Promise<AxiosResponse<any, any>>;
  isEnum?: boolean;
  additionalInputProps?: SelectProps;
}
export default function Select({
  formHook,
  placeHolder = "Please select an option",
  name,
  defOptions = [],
  isEnum = false,
  fetchDataCall,
  additionalInputProps,
}: ISelect) {
  const [options, setOptions] =
    useState<{ value: string; label: string }[]>(defOptions);
  useEffect(() => {
    fetchDataCall().then((x) =>
      setOptions(x.data.items === undefined ? x.data.result : x.data.items)
    );
  }, []);
  useEffect(() => {
    // console.log(options);
  }, [options]);
  return (
    <>
      {/* <VSelect {...field} placeholder={placeHolder}        
          >
            {options?.map((option, index) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </VSelect> */}
      <Controller
        control={formHook.control}
        render={({ field }) => (
          // <CSelect
          //   defaultValue={options[1]}
          //   {...field}
          //   styles={ss}
          //   theme={customTheme}
          //   options={options}
          //   isSearchable
          // />
          <VSelect
            {...field}
            placeholder={placeHolder}
            {...additionalInputProps}
          >
            {options?.map((option, index) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </VSelect>
        )}
        rules={{
          required: "Please provide a category",
        }}
        name={name}
      />
    </>
  );
}

// const { colorMode, toggleColorMode } = useColorMode();
//   const isDark = colorMode === "dark";
//   const mTheme = theme.colors.messenger;
// const ss: StylesConfig = {
//   control: (styles) => ({
//     ...styles,
//     backgroundColor: isDark ? theme.colors.gray[700] : "white",
//     borderColor: isDark
//       ? theme.colors.whiteAlpha[300]
//       : theme.colors.gray[200],
//     color: isDark ? "white" : "black",
//   }),
//   input: (styles) => ({
//     ...styles,
//     color: isDark ? "white" : "black",
//   }),
//   menu: (styles) => ({
//     ...styles,
//     backgroundColor: isDark ? theme.colors.gray[700] : "white",
//   }),
//   singleValue: (styles) => ({
//     ...styles,
//     color: isDark ? "white" : "black",
//   }),
// };

// function customTheme(theme: Theme): Theme {
//   if (!isDark) {
//     return {
//       ...theme,
//       colors: {
//         ...theme.colors,
//         primary: mTheme[400],
//         primary25: mTheme[100],
//         primary50: mTheme[300],
//         primary75: mTheme[400],
//       },
//     };
//   }

//   return {
//     ...theme,
//     colors: {
//       ...theme.colors,
//       primary: mTheme[400],
//       primary25: mTheme[100],
//       primary50: mTheme[300],
//       primary75: mTheme[400],
//     },
//   };
// }
//const def = withDefaultColorScheme("pink");
