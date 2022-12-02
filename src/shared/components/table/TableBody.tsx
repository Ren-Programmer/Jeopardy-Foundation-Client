import { Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { Fragment, ReactElement } from "react";
import { ListDTOCommon } from "shared/interfaces/dtos";
import CrudOptions from "./crud-table/CrudOptions";
import { IHeader, ITableHeader } from "./TableHeader";

export interface ITableBody {
  tableHeaderProps: ITableHeader;
  data: any[];
  updateMethod:(id:string)=>void
  viewMethod:(id:string)=>void
  deleteMethod: (id: string) => void;
}

export default function TableBody({
  tableHeaderProps,
  data,
  updateMethod,
  viewMethod,
  deleteMethod
}: ITableBody) {
  const { headers, optionsStatus } = tableHeaderProps;
  return (
    <>
      <Tbody>
        {data.length === 0 && (
          <>
            <Tr>
              <Td colSpan={2}>
                No Data is Present
              </Td>
            </Tr>
          </>
        )}
        {data.length !== 0 && (
          <>
            {data.map((item) => {
              //if(optionsElement) optionsElement.props.id = item.id;
              return (
                <Fragment key={item.id}>
                  <Tr>
                    {headers
                      .sort((a, b) => a.order - b.order)
                      .map((header) => {
                        return (
                          <Fragment key={header.order}>
                            {header.order === 1 && (
                              <Td fontWeight={"semibold"} scope="row">{item[header.name]}</Td>
                            )}
                            {header.order !== 1 && <Td>{item[header.name]}</Td>}
                          </Fragment>
                        );
                      })}
                    {optionsStatus === "show" && (
                      <Td>
                        <CrudOptions id={item.id} 
                        viewMethod={viewMethod}
                        deleteMethod={deleteMethod}
                        updateMethod={updateMethod} />
                      </Td>
                    )}
                  </Tr>
                </Fragment>
              );
            })}
          </>
        )}
      </Tbody>
    </>
  );
}
