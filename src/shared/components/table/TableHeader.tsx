import { Thead, Tr, Th, Box, chakra, BadgeProps } from "@chakra-ui/react";
import { Fragment, ReactElement, useEffect, useState } from "react";
import TableHead from "./TableHead";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BaseSearchParams } from "api/interfaces";

export interface ITableHeader {
  headers: IHeader[];
  optionsStatus: "show" | "hide";
  baseParam: BaseSearchParams;
  setBaseParam: React.Dispatch<React.SetStateAction<BaseSearchParams>>;
}
export interface IHeader {
  name: string;
  displayName: string;
  order: number;
  renderMethod?: (data: any) => ReactElement;
}
export interface IActiveHeader {
  activeHeaderId?: number;
  activeName?: string;
  sortDirection?: "ascending" | "descending";
}

export default function TableHeader({
  headers,
  optionsStatus,
  baseParam,
  setBaseParam,
}: ITableHeader) {
  const [activeHeader, setActiveHeader] = useState<IActiveHeader>(
    {}
    //   {
    //   activeHeaderId: 1,
    //   sortDirection: "descending",
    // }
  );

  useEffect(() => {
    if (Object.keys(activeHeader).length !== 0) {
      const timeOutId = setTimeout(() => {
        if (activeHeader.activeHeaderId) {
          setBaseParam({
            ...baseParam,
            orderBy:
              activeHeader.activeName === undefined
                ? undefined
                : `${activeHeader.activeName} ${
                    activeHeader.sortDirection === "descending" ? "desc" : null
                  }`,
          });
        }
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [activeHeader]);

  return (
    <Thead>
      <Tr>
        {headers
          .sort((a, b) => a.order - b.order)
          .map((x) => {
            return (
              <Fragment key={x.order}>
                <TableHead
                  sortName={x.name}
                  arrowDown={<FaArrowDown />}
                  arrowUp={<FaArrowUp />}
                  activeHeader={activeHeader}
                  setActiveHeader={setActiveHeader}
                  id={x.order}
                  title={x.displayName}
                />
              </Fragment>
            );
          })}
        {/* {optionsStatus === "show" && (
          <Th scope="col">
            <Box>{"Options"}</Box>
          </Th>
        )} */}
      </Tr>
    </Thead>
  );
}
