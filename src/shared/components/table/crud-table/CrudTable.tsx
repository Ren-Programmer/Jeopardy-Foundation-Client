import Button from "shared/components/button/regular-button/Button";
import SuccessButton from "shared/components/button/regular-button/Success/SuccessButton";
import { ICardHeader } from "shared/components/card/card-header/CardHeader";
import { ICrudModal } from "shared/components/modal/crud-modal/CrudModal";
import Table, { ITable } from "../Table";
import { FaPlus } from "react-icons/fa";
import SearchInput from "shared/components/input/search-input/SearchInput";
import { extendTheme, Flex } from "@chakra-ui/react";
import { BaseSearchParams } from "api/interfaces";
import { PaginationProps } from "shared/components/pagination/Pagination";
import { useContext } from "react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { ProcessType } from "shared/components/Routing/Authorized";

export interface ICrudTable {
  tableProps: ITable;
  modalProps: ICrudModal;
  createMethod: () => void;
  baseParam: BaseSearchParams;
  setBaseParam: React.Dispatch<React.SetStateAction<BaseSearchParams>>;
  type:ProcessType
}

export default function CrudTable({
  tableProps,
  modalProps,
  createMethod,
  baseParam,
  setBaseParam,
  type
}: ICrudTable) {
  const { claims,isCrudAdmin,isGameCreator } = useContext(AuthenticationContext);
  let decider = false;

  switch (type) {
    case ProcessType.GameCreation: {
      decider = isGameCreator
      break;
    }
    case ProcessType.GeneralCrud: {
      decider = isCrudAdmin
      break;
    }
    default:
      break;
  }
  
  const ff = (
    <>
      <Flex>
        <SearchInput {...{ baseParam, setBaseParam }} />
        {decider && (
          <>
            <Button
              info="Create"
              buttonProps={{
                onClick: createMethod,
                leftIcon: <FaPlus />,
                colorScheme: "messenger",
              }}
            ></Button>
          </>
        )}
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
