import CardBody, { ICardBody } from "./CardBody";
import CardHeader, { ICardHeader } from "./card-header/CardHeader";
import "./css/Card.css";

export interface ICard {
  cardHeaderProps: ICardHeader;
  cardBodyProps: ICardBody;
}

export default function Card({ cardHeaderProps, cardBodyProps }: ICard) {
  return (
    <>
      <div className="card">
      <CardHeader {...cardHeaderProps} />
      <CardBody {...cardBodyProps} />
      </div>
    </>
  );
}
