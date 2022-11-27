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
      <tbody>
        {data.length === 0 && (
          <>
            <tr>
              <td id="no-data" colSpan={2}>
                No Data is Present
              </td>
            </tr>
          </>
        )}
        {data.length !== 0 && (
          <>
            {data.map((item) => {
              //if(optionsElement) optionsElement.props.id = item.id;
              return (
                <Fragment key={item.id}>
                  <tr>
                    {headers
                      .sort((a, b) => a.order - b.order)
                      .map((header) => {
                        return (
                          <Fragment key={header.order}>
                            {header.order === 1 && (
                              <th scope="row">{item[header.name]}</th>
                            )}
                            {header.order !== 1 && <td>{item[header.name]}</td>}
                          </Fragment>
                        );
                      })}
                    {optionsStatus === "show" && (
                      <td>
                        <CrudOptions id={item.id} 
                        viewMethod={viewMethod}
                        deleteMethod={deleteMethod}
                        updateMethod={updateMethod} />
                      </td>
                    )}
                  </tr>
                </Fragment>
              );
            })}
          </>
        )}
      </tbody>
    </>
  );
}
