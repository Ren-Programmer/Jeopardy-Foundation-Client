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
    <thead>
      <tr>
        {headers
          .sort((a, b) => a.order - b.order)
          .map((x) => {
            return (
              <Fragment key={x.order}>
                <th scope="col">
                  {x.displayName}
                </th>
              </Fragment>
            );
          })}
          {optionsStatus === "show" && <th scope="col">Options</th>}
      </tr>
    </thead>
  );
}
