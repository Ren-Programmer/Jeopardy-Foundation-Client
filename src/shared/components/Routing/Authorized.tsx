import { Container } from "@chakra-ui/react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { ReactElement, useContext } from "react";

export enum ProcessType {
  GeneralCrud,
  GameCreation,
}

export interface IAuthorized {
  authenticationType: ProcessType;
  element: ReactElement;
  isContainer?: boolean;
}
export default function Authorized({
  authenticationType,
  element,
  isContainer = true,
}: IAuthorized) {
  const { isCrudAdmin, isGameCreator } = useContext(AuthenticationContext);
  switch (authenticationType) {
    case ProcessType.GeneralCrud: {
      if (isCrudAdmin) {
        if (isContainer === true)
          return <Container maxWidth={"container.xl"}>{element}</Container>;
        else return <>{element}</>;
      } else {
        return <>You are not authorised</>;
      }
    }
    case ProcessType.GameCreation: {
      if (isGameCreator) {
        if (isContainer === true)
          return <Container maxWidth={"container.xl"}>{element}</Container>;
        else return <>{element}</>;
      } else {
        return <>You are not authorised</>;
      }
    }
    default: {
      return element;
    }
  }
}
