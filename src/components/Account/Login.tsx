import { Center, Stack, Image, Heading, Text, Button } from "@chakra-ui/react";
import agent from "api/agent";
import { useForm } from "react-hook-form";
import Card from "shared/components/card/Card";
import SecurityCard from "./SecurityCard";

export interface ILogin {}
export default function Login({}: ILogin) {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* <button
        onClick={() => {
          agent.Account.login({ userName: "Admin", password: "P@55w0rd!!" });
        }}
      >
        aSvazbfdnbsfd
      </button> */}
      <SecurityCard 
      type="login"
      help="Please log in with your credentials below"
      heading="Log In" 

      />
    </>
  );
}
