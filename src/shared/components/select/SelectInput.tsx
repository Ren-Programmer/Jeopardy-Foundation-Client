import { Input } from "@chakra-ui/react";
import { components } from "react-select";
export interface ISelectInput {
  innerRef: any;
  innerProps: any;
}
export default function SelectInput({ innerProps, innerRef }: any) {
  return (
    <>
      {/* <components.Input {...props}>
        <input ref={props.innerRef} />
      </components.Input> */}
      <input ref={innerRef} {...innerProps} />
      {/* <components.Control {...props}>
        <input/>
     </components.Control> */}
    </>
  );
}
// export default function CustomOption(props: any) {
//   return (
//     <components.Control {...props}>
//       <div {...props}>{/* your component internals */ "wsgbwshbwhbb"}</div>
//     </components.Control>
//   );
// }
