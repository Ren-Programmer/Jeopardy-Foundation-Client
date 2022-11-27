import TableBody from "shared/components/table/TableBody";
import TableHeader, {
  IHeader,
  ITableHeader,
} from "shared/components/table/TableHeader";
import "./css/Table.css";
import Card from "../card/Card";
import { ICardHeader } from "../card/card-header/CardHeader";
import CrudOptions from "./crud-table/CrudOptions";
import { ReactElement } from "react";

export interface ITable {
  tableHeaderProps: ITableHeader;
  data: any[];
  caption: string;
  cardHeaderProps: ICardHeader;
  updateMethod: (id: string) => void;
  viewMethod: (id: string) => void;
  deleteMethod: (id: string) => void;
}

export default function Table({
  tableHeaderProps,
  data,
  caption,
  cardHeaderProps,
  updateMethod,
  viewMethod,
  deleteMethod
}: ITable) {
  return (
    <>
      <Card
        cardHeaderProps={cardHeaderProps}
        cardBodyProps={{
          children: (
            <div className="table-div">
              <table>
                <caption>{caption}</caption>
                <TableHeader {...tableHeaderProps} />
                <TableBody
                  updateMethod={updateMethod}
                  viewMethod={viewMethod}
                  deleteMethod={deleteMethod}
                  tableHeaderProps={tableHeaderProps}
                  data={data}
                />
              </table>
            </div>
          ),
        }}
      />
    </>
  );
}
