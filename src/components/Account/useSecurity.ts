import agent from "api/agent";
import exp from "constants";
import AuthenticationContext, { IClaim } from "Contexts/AuthenticationContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { IAuthenticationResponse } from "./account-interfaces";
export interface ISecurity {
  type: "login" | "register";
}
const tokenKey = "token";
const expirationKey = "token-expiration";
export default function useSecurity({ type }: ISecurity) {
  const { updateClaims } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const formHook = useForm();
  let submit: (data: any) => void = async (data: any) => {
    agent.Account.login(data)
      .then((response) => {
        toast.success("Success, you will be redirected.");
        navigate("/dashboard");
        saveToken(response.data.result, updateClaims);
      })
      .catch((error) => {
        toast.error("UserName or Password is Incorrect. Please try again.");
      });
  };
  let error: (error: any) => void = (error: any) => {
    console.log("EE");
  };
  switch (type) {
    case "login": {
      break;
    }
    case "register": {
      break;
    }
  }
  return {
    formHook,
    submit,
    error,
  };
}

function saveToken(response: IAuthenticationResponse, updateClaims: any) {
  localStorage.setItem(tokenKey, response.token);
  localStorage.setItem(expirationKey, response.expiration);
  const claims = getClaims();
  updateClaims(claims);
}

export function getClaims(): IClaim[] {
  const token = localStorage.getItem(tokenKey);
  if (!token) {
    return [];
  }
  const expiration = localStorage.getItem(expirationKey)!;
  if (new Date(expiration) <= new Date()) {
    return [];
  }

  const dataToken = JSON.parse(atob(token.split(".")[1]));
  console.log(dataToken);
  const claims: IClaim[] = [];
  Object.keys(dataToken).forEach((key) => {
    if (key === "roles") {
      let roles = JSON.parse(dataToken[key]) as string[];
      claims.push({ property: key, value: roles });
    } else {
      claims.push({ property: key, value: dataToken[key] });
    }
  });
  return claims;
}

export function logOut(updateClaims: any, navigate: NavigateFunction) {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(expirationKey);
  const claims = getClaims();
  navigate("/login");
  updateClaims(claims);
}
