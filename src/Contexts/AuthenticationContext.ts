import { createContext } from "react";

export interface IAuth {
  claims: IClaim[];
  updateClaims: (claims: IClaim[]) => void;
  isAuthenticated: boolean
  isCrudAdmin:boolean
  isGameCreator:boolean
}
export interface IClaim {
  property: string;
  value: string | string[];
}

const AuthenticationContext = createContext<IAuth>({
  claims: [],
  updateClaims: () => {},
  isAuthenticated:false,
  isCrudAdmin:false,
  isGameCreator:false
});
export default AuthenticationContext;
