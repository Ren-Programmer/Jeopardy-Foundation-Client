import { ReactElement } from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import Button from "shared/components/button/regular-button/Button";
//import "./CardHeader.css";

export interface ICardHeader {
  cardTitle: string;
  auxillaryHTML?: ReactElement;
}

export default function CardHeader({ cardTitle, auxillaryHTML }: ICardHeader) {
  return (
    <>
      {/* <div className="card-header">
        <h2 className="card-header-title">{cardTitle}</h2>
        <div className="card-header-options">
          <div className="add">
            {auxillaryHTML}            
          </div>
        </div>
      </div> */}
      <Flex direction={"row"}>
        <Heading flexGrow={1}>{cardTitle}</Heading>
        <Box >{auxillaryHTML}</Box>
      </Flex>
    </>
  );
}
