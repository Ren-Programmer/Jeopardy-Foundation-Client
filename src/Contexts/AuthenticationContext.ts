import { createContext } from "react";

export interface IAuth {
  claims: IClaim[];
  updateClaims: (claims: IClaim[]) => void;
  isAuthenticated: boolean
}
export interface IClaim {
  property: string;
  value: string | string[];
}

const AuthenticationContext = createContext<IAuth>({
  claims: [],
  updateClaims: () => {},
  isAuthenticated:false
});
export default AuthenticationContext;
