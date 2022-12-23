import { CreateToastFnReturn } from "@chakra-ui/react";
import { createContext } from "react";
export interface IAPP {
  toast?: CreateToastFnReturn;
}

const AppContext = createContext<IAPP>({
  
});

export default AppContext;
