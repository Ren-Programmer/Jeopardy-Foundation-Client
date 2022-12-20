import { IconButton, Tooltip } from "@chakra-ui/react";
import AuthenticationContext from "Contexts/AuthenticationContext";
import { ReactElement, useContext } from "react";
import { FaTrashAlt, FaPencilAlt, FaRegEye, FaOpencart } from "react-icons/fa";
import DropDown, {
  IDropDownItem,
} from "shared/components/dropdown-menu/DropDown";
import { ProcessType } from "shared/components/Routing/Authorized";
import CrudOption, { ICrudOption } from "./CrudOption";

export interface IAdditionalOption {
  aria_label: string;
  toolTip: string;
  method: (id: string) => void;
  icon: ReactElement;
}

export interface ICrudOptions {
  id: string;
  viewMethod?: (id: string) => void;
  updateMethod: (id: string) => void;
  deleteMethod?: (id: string) => void;
  type: ProcessType;
  additionalOptions: IAdditionalOption[];
}

export default function CrudOptions({
  id,
  updateMethod,
  deleteMethod,
  viewMethod,
  type,
  additionalOptions = [],
}: ICrudOptions) {
  const { isCrudAdmin, isGameCreator } = useContext(AuthenticationContext);
  let decider = false;

  switch (type) {
    case ProcessType.GameCreation: {
      decider = isGameCreator;
      break;
    }
    case ProcessType.GeneralCrud: {
      decider = isCrudAdmin;
      break;
    }
    default:
      break;
  }

  return (
    <>
      {/* <DropDown
    title="Options"
    icon={<FaOpencart/>}
    items={[

    ]}
    /> */}
      {decider && (
        <>
          <CrudOption
            aria_label="update-button"
            icon={<FaPencilAlt />}
            method={() => updateMethod(id)}
            toolTip="Edit"
          />
          <CrudOption
            aria_label="delete-button"
            icon={<FaTrashAlt />}
            method={() => deleteMethod!(id)}
            toolTip="Delete"
          />
        </>
      )}
      <CrudOption
        aria_label="view-button"
        icon={<FaRegEye />}
        method={() => viewMethod!(id)}
        toolTip="View"
      />

      {decider && (
        <>
          {additionalOptions.map((opt,index) => {
            return (
              
                <CrudOption key={index}
                  {...{
                    aria_label: opt.aria_label,
                    icon: opt.icon,
                    toolTip: opt.toolTip,
                    method: () => {
                      opt.method(id);
                    },
                  }}
                />
              
            );
          })}
        </>
      )}
    </>
  );
}
