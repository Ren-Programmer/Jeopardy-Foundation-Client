import { Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { Fragment, ReactElement } from "react";
import { ListDTOCommon } from "shared/interfaces/dtos";
import { ProcessType } from "../Routing/Authorized";
import { ICrudOption } from "./crud-table/CrudOption";
import CrudOptions, { IAdditionalOption } from "./crud-table/CrudOptions";
import { IHeader, ITableHeader } from "./TableHeader";

export interface ITableBody {
  tableHeaderProps: ITableHeader;
  data: any[];
  updateMethod: (id: string) => void;
  viewMethod: (id: string) => void;
  deleteMethod: (id: string) => void;
  type: ProcessType;
  additionalOptions: IAdditionalOption[];
  onDoubleClick?: (data: any) => void;
  //renderMethod?: () => ReactElement;
}

export default function TableBody({
  tableHeaderProps,
  data,
  updateMethod,
  viewMethod,
  deleteMethod,
  type,
  additionalOptions,
  onDoubleClick,
}: //renderMethod,
ITableBody) {
  const { headers, optionsStatus } = tableHeaderProps;
  return (
    <>
      <Tbody>
        {data.length === 0 && (
          <>
            <Tr>
              <Td colSpan={2}>No Data is Present</Td>
            </Tr>
          </>
        )}
        {data.length !== 0 && (
          <>
            {data.map((item) => {
              //if(optionsElement) optionsElement.props.id = item.id;
              return (
                <Fragment key={item.id}>
                  <Tr
                    onDoubleClick={() =>
                      onDoubleClick !== undefined
                        ? onDoubleClick!(item)
                        : () => {}
                    }
                  >
                    {headers
                      .sort((a, b) => a.order - b.order)
                      .map((header) => {
                        return (
                          <Fragment key={header.order}>
                            {header.renderMethod === undefined && (
                              <>
                                {header.order === 1 && (
                                  <Td fontWeight={"semibold"} scope="row">
                                    {item[header.name]}
                                  </Td>
                                )}
                                {header.order !== 1 && (
                                  <Td>
                                    <>{item[header.name]}</>
                                  </Td>
                                )}
                              </>
                            )}
                            {header.renderMethod !== undefined && (
                              <Td>{header.renderMethod(item[header.name])}</Td>
                            )}
                          </Fragment>
                        );
                      })}
                    {optionsStatus === "show" && (
                      <Td>
                        <CrudOptions
                          additionalOptions={additionalOptions}
                          type={type}
                          id={item.id}
                          viewMethod={viewMethod}
                          deleteMethod={deleteMethod}
                          updateMethod={updateMethod}
                        />
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
