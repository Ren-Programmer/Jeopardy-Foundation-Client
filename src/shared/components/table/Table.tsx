import TableBody from "shared/components/table/TableBody";
import TableHeader, { ITableHeader } from "shared/components/table/TableHeader";
//import "./css/Table.css";
import Card from "../card/Card";
import { ICardHeader } from "../card/card-header/CardHeader";
import {
  Box,
  Divider,
  Table as CTable,
  TableCaption,
  TableContainer,
  Tfoot,
  Tr,
} from "@chakra-ui/react";
import Pagination, { PaginationProps } from "../pagination/Pagination";
import { BaseSearchParams } from "api/interfaces";
import { ProcessType } from "../Routing/Authorized";
import { ICrudOption } from "./crud-table/CrudOption";
import { IAdditionalOption } from "./crud-table/CrudOptions";

export interface ITable {
  tableHeaderProps: ITableHeader;
  data: any[];
  caption: string;
  cardHeaderProps: ICardHeader;
  updateMethod: (id: string) => void;
  viewMethod: (id: string) => void;
  deleteMethod: (id: string) => void;
  paginationProps: PaginationProps;
  baseParam: BaseSearchParams;
  setBaseParam: React.Dispatch<React.SetStateAction<BaseSearchParams>>;
  type: ProcessType;
  additionalOptions: IAdditionalOption[];
}

export default function Table({
  tableHeaderProps,
  data,
  caption,
  cardHeaderProps,
  updateMethod,
  viewMethod,
  deleteMethod,
  paginationProps,
  baseParam,
  setBaseParam,
  type,
  additionalOptions,
}: ITable) {
  return (
    <>
      <Card
        cardHeaderProps={cardHeaderProps}
        cardBodyProps={{
          children: (
            <>
              <TableContainer height={"420px"} overflowY="scroll">
                <CTable
                  size={"sm"}
                  colorScheme={process.env.REACT_APP_COLOR_SCHEME}
                  variant={"striped"}
                >
                  {/* <TableCaption placement={"top"}>{caption}</TableCaption> */}
                  <TableHeader {...tableHeaderProps} />

                  <TableBody
                    additionalOptions={additionalOptions}
                    type={type}
                    updateMethod={updateMethod}
                    viewMethod={viewMethod}
                    deleteMethod={deleteMethod}
                    tableHeaderProps={tableHeaderProps}
                    data={data}
                  />
                </CTable>
              </TableContainer>

              <Box mt={4}>
                <Divider mb={2}></Divider>
                <Pagination
                  // paginationProps={{
                  //   currentPage: 45,
                  //   pageSize: 3,
                  //   totalCount: 150,
                  //   totalPages: 50,
                  // }}
                  paginationProps={paginationProps}
                  baseParam={baseParam}
                  setBaseParam={setBaseParam}
                />
              </Box>
            </>
          ),
        }}
      />
    </>
  );
}
