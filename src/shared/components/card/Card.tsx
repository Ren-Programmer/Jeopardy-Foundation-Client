import CardBody, { ICardBody } from "./CardBody";
import CardHeader, { ICardHeader } from "./card-header/CardHeader";
import {
  Card as CCard,
  CardHeader as CCHeader,
  CardBody as CCBody,
  CardFooter as CCFooter,
} from "@chakra-ui/react";

export interface ICard {
  cardHeaderProps: ICardHeader;
  cardBodyProps: ICardBody;
}

export default function Card({ cardHeaderProps, cardBodyProps }: ICard) {
  return (
    <>  
      <CCard>
        <CCHeader>
          <CardHeader {...cardHeaderProps} />
        </CCHeader>
        <CCBody>
          <CardBody {...cardBodyProps} />
        </CCBody>
      </CCard>
    </>
  );
}
