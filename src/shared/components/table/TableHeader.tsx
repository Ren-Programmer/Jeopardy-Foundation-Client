import { Thead,Tr, Th } from "@chakra-ui/react";
import { Fragment } from "react";

export interface ITableHeader {
  headers: IHeader[];
  optionsStatus: "show"|"hide"
}
export interface IHeader {
  name: string;
  displayName: string;
  order: number;
}

export default function TableHeader({ headers, optionsStatus }: ITableHeader) {
  return (
    <Thead>
      <Tr>
        {headers
          .sort((a, b) => a.order - b.order)
          .map((x) => {
            return (
              <Fragment key={x.order}>
                <Th scope="col">
                  {x.displayName}
                </Th>
              </Fragment>
            );
          })}
          {optionsStatus === "show" && <Th scope="col">Options</Th>}
      </Tr>
    </Thead>
  );
}
