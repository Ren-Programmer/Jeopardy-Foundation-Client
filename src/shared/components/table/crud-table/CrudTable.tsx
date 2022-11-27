import SuccessButton from "shared/components/button/regular-button/Success/SuccessButton";
import { ICardHeader } from "shared/components/card/card-header/CardHeader";
import { ICrudModal } from "shared/components/modal/crud-modal/CrudModal";
import Table, { ITable } from "../Table";

export interface ICrudTable {
  tableProps: ITable;
  modalProps:ICrudModal
  createMethod:()=>void
  
}

export default function CrudTable({ tableProps,modalProps, createMethod }: ICrudTable) {
  const ff = (
    <>
      <SuccessButton 
      buttonProps={{
        onClick:createMethod
      }}
      info="Create!!" 
      />
    </>
  );
  tableProps.cardHeaderProps.auxillaryHTML = ff;
  return (
    <>
      <Table {...tableProps} />
    </>
  );
}
