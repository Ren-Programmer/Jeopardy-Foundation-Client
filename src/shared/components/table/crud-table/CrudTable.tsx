import Button from "shared/components/button/regular-button/Button";
import SuccessButton from "shared/components/button/regular-button/Success/SuccessButton";
import { ICardHeader } from "shared/components/card/card-header/CardHeader";
import { ICrudModal } from "shared/components/modal/crud-modal/CrudModal";
import Table, { ITable } from "../Table";
import {FaPlus} from "react-icons/fa"
import SearchInput from "shared/components/input/search-input/SearchInput";
import { extendTheme, Flex } from "@chakra-ui/react";
import { BaseSearchParams } from "api/interfaces";
import { PaginationProps } from "shared/components/pagination/Pagination";

export interface ICrudTable {
  tableProps: ITable;
  modalProps:ICrudModal
  createMethod:()=>void
  baseParam:BaseSearchParams;
  setBaseParam:React.Dispatch<React.SetStateAction<BaseSearchParams>>
}

export default function CrudTable({tableProps,modalProps, createMethod, baseParam, setBaseParam }: ICrudTable) {
  const ff = (
    <>
      {/* <SuccessButton 
      buttonProps={{
        onClick:createMethod
      }}
      info="Create!!" 
      /> */}

      <Flex>
      <SearchInput {...{baseParam,setBaseParam}}/>
      <Button info="Create" buttonProps={{
        onClick:createMethod,
        leftIcon:<FaPlus/>,
         colorScheme:"messenger"
      }}></Button>
      </Flex>
    </>
  );
  tableProps.cardHeaderProps.auxillaryHTML = ff;
  // tableProps.paginationProps = paginationProps
  return (
    <>
      <Table {...tableProps} />
    </>
  );
}
