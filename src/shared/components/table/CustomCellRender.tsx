import { Badge, BadgeProps } from "@chakra-ui/react";
import { ReactElement } from "react";
//import { ICustomRender } from "./TableHeader";

export interface ICustomCellRender {
  //customRenderProps?: ICustomRender;
  //data: number | string | boolean;
}

export default function CustomCellRender({
    
  
}: ICustomCellRender) {
    return null;
//   const { props, type } = customRenderProps;
//   let UI: ReactElement;
//   switch (type) {
//     case "badge": {
//       UI = <Badge {...props}>{data}</Badge>;
//       break;
//     }
//     default: {
//       UI = <>{data}</>;
//       break;
//     }
//   }
//   return UI;
}
